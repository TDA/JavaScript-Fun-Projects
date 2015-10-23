/**
 * Created by schandramouli on 10/22/15.
 */
$(document).ready(function() {
  $('#pdfConvertor').click(function () {
    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = $('#printable')[0];
    name = $('#printable').attr('data-name') || 'Important';
    alert(name);
    margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 522
    };
    pdf.fromHTML(
      source, // HTML string or DOM elem ref.
      margins.left, // x coord
      margins.top, {// y coord
        'width': margins.width
      },
      function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        //          this allow the insertion of new lines after html
        pdf.save(name + '.pdf');
      }
      , margins);
    //alert("pdf");
  });
});
