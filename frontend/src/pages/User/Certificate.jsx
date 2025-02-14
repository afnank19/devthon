import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import cert from "../../assets/cert.webp";
import UserHeader from "../../components/UserHeader";

export default function Certificate() {
  const [isCertificateGenerated, setIsCertificateGenerated] = useState(false);
  const [pdf, setPdf] = useState(null);

  // This function will capture the certificate content and generate a PDF.
  const generatePDF = () => {
    const certificateElement = document.getElementById('certificate');
    
    html2canvas(certificateElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdfDoc = new jsPDF();

      pdfDoc.addImage(imgData, 'PNG', 0, 0);
      setPdf(pdfDoc); // Save the generated PDF for later download
    });
  };

  const downloadPDF = () => {
    if (pdf) {
      pdf.save('certificate.pdf');
    }
  };

  useEffect(() => {
    // Simulate that the certificate can be generated after a course completion.
    setTimeout(() => {
      setIsCertificateGenerated(true);
    }, 1000); // Simulate the certificate generation
  }, []);

  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-b from-gray-900 to-gray-700">
      <UserHeader />

      {/* Display the certificate */}
      {isCertificateGenerated ? (
        <div id="certificate" className="bg-slate-700 p-10 rounded-lg shadow-2xl text-center mx-auto w-11/12 sm:w-fit">
          <h2 className="text-xl font-semibold text-white mb-6">Certificate of Completion</h2>
          <div className="mb-6">
            <img
              src={cert}  // Using the user's avatar image
              alt="User Avatar"
              className="w-full h-auto max-h-80 object-contain rounded-2xl mx-auto mb-6" // 80% width, maintain aspect ratio
            />
            <h3 className="text-2xl text-white">John Doe</h3>
            <p className="text-white text-lg mt-2">has successfully completed the Vocal Training Course.</p>
          </div>
        </div>
      ) : (
        <p className="text-white">Generating certificate...</p>
      )}

      <div className="mt-8">
        {/* Button to generate the certificate */}
        <button
          onClick={generatePDF}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Generate PDF
        </button>
      </div>

      {/* Button to download the generated PDF */}
      {pdf && (
        <div className="mt-6">
          <button
            onClick={downloadPDF}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Download Certificate
          </button>
        </div>
      )}
    </div>
  );
}
