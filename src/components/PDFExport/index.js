import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class PDFExport extends React.Component {
    print = async ()=>{
        const input = document.getElementById('root');
        // TODO: Check size and paging
        var pdf = new jsPDF();
        html2canvas(input, {
            scale:0.44
          }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          
          pdf = new jsPDF('p', 'mm', [297, 210]);
          
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save(`CV.pdf`);
        });
      ;
    }

    render() {
        return (
            <>
            <button class="btn btn-navy btn-icon pull-right" data-html2canvas-ignore="true" onClick={()=>this.print()}><i class="jam jam-printer"></i> Export</button>
            </>
        );
    }
}

export default PDFExport;