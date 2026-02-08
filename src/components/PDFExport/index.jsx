import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class PDFExport extends React.Component {
    print = async () => {
        const input = document.getElementById('root');
        const exportBtn = document.querySelector('[data-html2canvas-ignore]');

        // Hide the export button during capture
        if (exportBtn) exportBtn.style.display = 'none';

        // Add a temporary class to force desktop-width rendering for PDF
        document.body.classList.add('pdf-exporting');

        // Use a fixed capture width that maps cleanly to A4 proportions
        const captureWidth = 960;

        try {
            const canvas = await html2canvas(input, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#f9f9f9',
                windowWidth: captureWidth,
                width: captureWidth,
                scrollX: 0,
                scrollY: -window.scrollY,
                logging: false,
                onclone: (clonedDoc) => {
                    const clonedBody = clonedDoc.body;
                    clonedBody.style.width = captureWidth + 'px';
                    clonedBody.style.overflow = 'hidden';

                    const clonedRoot = clonedDoc.getElementById('root');
                    if (clonedRoot) {
                        clonedRoot.style.width = captureWidth + 'px';
                        clonedRoot.style.maxWidth = captureWidth + 'px';
                        clonedRoot.style.overflow = 'hidden';
                    }

                    // Force all containers to fit
                    clonedDoc.querySelectorAll('.container, .container-fluid').forEach(el => {
                        el.style.width = '100%';
                        el.style.maxWidth = '100%';
                        el.style.paddingLeft = '15px';
                        el.style.paddingRight = '15px';
                    });

                    // Force rows to not overflow
                    clonedDoc.querySelectorAll('.row').forEach(el => {
                        el.style.marginLeft = '0';
                        el.style.marginRight = '0';
                    });

                    // Ensure tag lists wrap properly
                    clonedDoc.querySelectorAll('.list-inline').forEach(el => {
                        el.style.display = 'flex';
                        el.style.flexWrap = 'wrap';
                        el.style.gap = '4px';
                        el.style.paddingLeft = '0';
                    });
                }
            });

            // A4 dimensions in mm
            const pageWidth = 210;
            const pageHeight = 297;
            const margin = 10;
            const contentWidth = pageWidth - (margin * 2);
            const contentHeight = pageHeight - (margin * 2);

            // Calculate scaling: fit the canvas width to the PDF content width
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = contentWidth / (imgWidth / 2); // /2 because scale:2
            const scaledHeight = (imgHeight / 2) * ratio;

            // Calculate how many pages we need
            const totalPages = Math.ceil(scaledHeight / contentHeight);

            const pdf = new jsPDF('p', 'mm', 'a4');

            for (let page = 0; page < totalPages; page++) {
                if (page > 0) {
                    pdf.addPage();
                }

                // Calculate which portion of the source canvas to render on this page
                const sourceY = (page * contentHeight / ratio) * 2; // *2 for scale
                const sourceHeight = Math.min(
                    (contentHeight / ratio) * 2,
                    imgHeight - sourceY
                );

                if (sourceHeight <= 0) break;

                // Create a temporary canvas for this page's slice
                const pageCanvas = document.createElement('canvas');
                pageCanvas.width = imgWidth;
                pageCanvas.height = sourceHeight;
                const ctx = pageCanvas.getContext('2d');

                ctx.drawImage(
                    canvas,
                    0, sourceY,           // source x, y
                    imgWidth, sourceHeight, // source width, height
                    0, 0,                   // dest x, y
                    imgWidth, sourceHeight  // dest width, height
                );

                const pageImgData = pageCanvas.toDataURL('image/png', 1.0);
                const sliceScaledHeight = (sourceHeight / 2) * ratio;

                pdf.addImage(
                    pageImgData, 'PNG',
                    margin, margin,
                    contentWidth, sliceScaledHeight
                );
            }

            pdf.save('CV.pdf');
        } catch (error) {
            console.error('PDF export failed:', error);
        } finally {
            // Restore the export button and remove PDF class
            document.body.classList.remove('pdf-exporting');
            if (exportBtn) exportBtn.style.display = '';
        }
    }

    render() {
        return (
            <>
                <button class="btn btn-navy btn-icon pull-right" data-html2canvas-ignore="true" onClick={() => this.print()}><i class="jam jam-printer"></i> Export</button>
            </>
        );
    }
}

export default PDFExport;