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

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(siteMeta.author, margin, y);
  y += 28;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("Informe de accesibilidad y publicación web", margin, y);
  y += 24;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  y = addWrappedText(
    doc,
    `Fecha ${formatDate()}   URL pública ${siteMeta.publicUrl}`,
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
  reportContent.pour.forEach((item) => addParagraph(item));

  addSectionTitle("3. Auditoría inicial");
  addParagraph(
    `En la captura inicial de Lighthouse salen estos resultados. Rendimiento ${auditBaseline.performance} accesibilidad ${auditBaseline.accessibility} buenas prácticas ${auditBaseline.bestPractices} y SEO ${auditBaseline.seo}`
  );
  auditBaseline.notes.forEach((item) => addParagraph(item));

  addSectionTitle("4. Problemas detectados");
  reportContent.problems.forEach((item) => addParagraph(item));

  addSectionTitle("5. Correcciones aplicadas");
  reportContent.fixes.forEach((item) => addParagraph(item));

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
      `En la captura final de Lighthouse salen estos resultados. Rendimiento ${auditFinal.performance} accesibilidad ${auditFinal.accessibility} buenas prácticas ${auditFinal.bestPractices} y SEO ${auditFinal.seo}`
    );
  } else {
    addParagraph("La auditoría final se actualiza después de la última comprobación de Lighthouse");
  }
  auditFinal.notes.forEach((item) => addParagraph(item));
  addParagraph(reportContent.result);

  addSectionTitle("8. Verificación");
  addParagraph(
    "La revisión la he hecho con Lighthouse y también con comprobación manual de teclado. He mirado que la web se pueda recorrer con TAB que el foco se vea bien y que el formulario explique los errores con texto"
  );
  addParagraph(
    "La publicación online la he hecho con Vercel para tener una URL pública estable y también he dejado el repositorio en GitHub para que el proyecto se pueda revisar completo"
  );
  doc.save("Informe_Anas_Kharbouch.pdf");
}
