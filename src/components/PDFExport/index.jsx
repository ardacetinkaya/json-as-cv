import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class PDFExport extends React.Component {
    print = async () => {
        const input = document.getElementById('root');

        var pdf = new jsPDF();
        html2canvas(input, {
            scale: 2
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            pdf = new jsPDF('p', 'mm', [900, 390]);

            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData, 'PNG', 0, 0, width, height);
            pdf.save(`CV.pdf`);
        });
        ;
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