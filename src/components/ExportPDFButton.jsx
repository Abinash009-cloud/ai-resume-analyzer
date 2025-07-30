import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ExportPDFButton = () => {
  const handleExport = async () => {
    const input = document.querySelector('.export-section'); // class of export area
    if (!input) {
      alert("Nothing to export!");
      return;
    }

    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    pdf.save('resume-analysis.pdf');
  };

  return (
    <button className="export-btn" onClick={handleExport}>
      📥 Export as PDF
    </button>
  );
};

export default ExportPDFButton;
