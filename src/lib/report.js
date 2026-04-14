import { auditBaseline, auditFinal, reportContent, siteMeta } from "../data/content";

function formatDate() {
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(new Date());
}

function addWrappedText(doc, text, x, y, maxWidth, lineHeight = 18) {
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
}

export async function downloadReportPdf() {
  const { default: jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const margin = 52;
  const width = doc.internal.pageSize.getWidth() - margin * 2;
  const height = doc.internal.pageSize.getHeight();
  let y = 58;

  const ensureSpace = (needed = 64) => {
    if (y + needed > height - 60) {
      doc.addPage();
      y = 58;
    }
  };

  const addSectionTitle = (title) => {
    ensureSpace(42);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.text(title, margin, y);
    y += 22;
  };

  const addParagraph = (text) => {
    ensureSpace(72);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    y = addWrappedText(doc, text, margin, y, width, 16);
    y += 10;
  };

  const addBulletList = (items) => {
    items.forEach((item) => {
      ensureSpace(52);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      y = addWrappedText(doc, `• ${item}`, margin, y, width, 16);
      y += 6;
    });
  };

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("Informe de accesibilidad y publicación web", margin, y);
  y += 28;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  y = addWrappedText(
    doc,
    `Autor: ${siteMeta.author} | Fecha: ${formatDate()} | URL pública: ${siteMeta.publicUrl}`,
    margin,
    y,
    width,
    16
  );
  y += 6;
  y = addWrappedText(
    doc,
    `Proyecto: ${siteMeta.title}`,
    margin,
    y,
    width,
    16
  );
  y += 16;

  addSectionTitle("1. Introducción");
  addParagraph(reportContent.introduction);

  addSectionTitle("2. POUR");
  addBulletList(reportContent.pour);

  addSectionTitle("3. Auditoría inicial");
  addParagraph(
    `Lighthouse inicial: rendimiento ${auditBaseline.performance}, accesibilidad ${auditBaseline.accessibility}, buenas prácticas ${auditBaseline.bestPractices} y SEO ${auditBaseline.seo}.`
  );
  addBulletList(auditBaseline.notes);

  addSectionTitle("4. Problemas detectados");
  addBulletList(reportContent.problems);

  addSectionTitle("5. Correcciones aplicadas");
  addBulletList(reportContent.fixes);

  addSectionTitle("6. Mejora avanzada");
  addParagraph(reportContent.advancedImprovement);

  addSectionTitle("7. Resultado final");
  if (
    auditFinal.performance !== null &&
    auditFinal.accessibility !== null &&
    auditFinal.bestPractices !== null &&
    auditFinal.seo !== null
  ) {
    addParagraph(
      `Lighthouse final: rendimiento ${auditFinal.performance}, accesibilidad ${auditFinal.accessibility}, buenas prácticas ${auditFinal.bestPractices} y SEO ${auditFinal.seo}.`
    );
  } else {
    addParagraph("La auditoría final se actualiza después de la última comprobación de Lighthouse.");
  }
  addBulletList(auditFinal.notes);

  addSectionTitle("8. Verificación");
  addParagraph(
    "La revisión se ha apoyado en Lighthouse y en la comprobación manual de teclado. También se deja preparada la validación con WAVE para revisar encabezados, labels, contraste y lectura estructural de la página."
  );
  addParagraph(
    "La publicación online se ha realizado con Vercel para disponer de una URL pública estable y poder compartir el proyecto final."
  );

  addSectionTitle("9. Conclusión");
  addParagraph(reportContent.conclusion);

  doc.save("informe-accesibilidad-anas-kharbouch.pdf");
}
