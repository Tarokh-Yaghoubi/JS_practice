
const path = require('path')
const fs = require('fs')

const rs = fs.createReadStream(path.join(__dirname, "lorem.txt"), { encoding: 'utf-8'})
const ws = fs.createWriteStream(path.join(__dirname, "new-lorem.txt"))

/*
rs.on('data', (dataChunk) => {
    console.log("I got the data Chunck")
    ws.write(dataChunk)
})
*/

rs.pipe(ws);   // this is doing the same thing and it is more efficient than that listener


