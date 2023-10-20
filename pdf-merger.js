const PDFMerger = require('pdf-merger-js');
const path = require('path')
var merger = new PDFMerger();

const mergepdf = async (p1,p2) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 2
  

  await merger.save('public/merged.pdf'); //save under given name and reset the internal document
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};
 




module.exports={mergepdf};