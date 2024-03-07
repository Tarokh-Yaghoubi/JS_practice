

const myFile = 'file.txt'
const fs = require('fs');
let fsInput = "This text is written to the file\n";
fs.writeFile(myFile, fsInput, (err) => {
    if (err) throw err;
    else {
        console.log("The file is updated with the given data");
    }
})

fs.readFile(myFile, (err, inputD) => {

    if (err) throw err;
    else {
        console.log(`The read data is ----->>>>   ${inputD.toString()}`);
    }

})


