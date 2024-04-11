import moment from "moment";
import jsPDF from "jspdf";

export const dateFormat = (date: string, formatString: string): string => {
  const momentDate = moment(date);
  return momentDate.format(formatString);
};

export const pdfExport = (id: string) => {
  const doc = new jsPDF("p", "px", [700, 905.88]);
  const element = document.getElementById(id);
  if (element) {
    doc.html(element, {
      callback: function (doc) {
        doc.save();
      },
    });
  }
};
