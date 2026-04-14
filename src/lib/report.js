import {
  auditBaseline,
  auditFinal,
  reportContent,
  reportImages,
  siteMeta
} from "../data/content";

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

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
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

  const addImageBlock = async (label, src) => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const dataUrl = await blobToDataUrl(blob);
      const properties = doc.getImageProperties(dataUrl);
      const imageWidth = width;
      const imageHeight = (properties.height * imageWidth) / properties.width;

      ensureSpace(imageHeight + 52);
      doc.addImage(dataUrl, "PNG", margin, y, imageWidth, imageHeight);
      y += imageHeight + 16;

      doc.setFont("helvetica", "italic");
      doc.setFontSize(10);
      y = addWrappedText(doc, label, margin, y, width, 14);
      y += 10;
    } catch {
      addParagraph(`No se ha podido cargar la imagen: ${label}`);
    }
  };

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(siteMeta.author, margin, y);
  y += 28;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("Informe de Auditoría de Accesibilidad Web", margin, y);
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
  addParagraph(reportContent.wcag);

  addSectionTitle("2. POUR");
  reportContent.pour.forEach((item) => addParagraph(item));

  addSectionTitle("3. Auditoría inicial");
  addParagraph(
    `En la captura inicial de Lighthouse salen estos resultados. Rendimiento ${auditBaseline.performance} accesibilidad ${auditBaseline.accessibility} buenas prácticas ${auditBaseline.bestPractices} y SEO ${auditBaseline.seo}`
  );
  addParagraph(reportContent.initialAudit);
  auditBaseline.notes.forEach((item) => addParagraph(item));
  await addImageBlock("Captura de Lighthouse inicial", reportImages.initial);

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
  await addImageBlock("Captura de Lighthouse final", reportImages.final);
  addParagraph(reportContent.result);

  addSectionTitle("8. Verificación");
  addParagraph(
    "La revisión la he hecho con Lighthouse y también con comprobación manual de teclado. He mirado que la web se pueda recorrer con TAB que el foco se vea bien y que el formulario explique los errores con texto"
  );
  addParagraph(
    "La publicación online la he hecho con Vercel para tener una URL pública estable y también he dejado el repositorio en GitHub para que el proyecto se pueda revisar completo"
  );
  addSectionTitle("9. Conclusión");
  addParagraph(reportContent.conclusion);
  doc.save("Informe_Anas_Kharbouch.pdf");
}
