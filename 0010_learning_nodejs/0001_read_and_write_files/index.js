// create, read and write, and delete files on a server using the file system module

// we use commonJS imports for importing the fs module (File system module)

const fs = require('fs')
const fsPromises = require('fs/promises')
const path = require('path')
// Asynchronously read the entire content of a file
// if no encoding is specified, then the raw buffer is returned.

let writeData = "\nFirst Line I Wrote To The File\n"

// reading passwd does not need super user privilege, so we are good
// fs.readFile('/etc/passwd', 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// this will return a raw buffer, because we have not specified the encoding
fs.readFile(path.join(__dirname, "starter.txt"), /* we pass the encoding to stop it */ 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
})


// because the operations in node are asynchronous , we do not know which of them will happen after what ??!?!?!?!
// so if we call them one after another in the callbacks, we are controlling the step of each operation
// now we know that the data will be appended to the file after we write and create the file using writeFile
// and also we know that we will rename the file after we append data to it, because we are calling fs.rename in the callback of appendFile :)))

// BUT IN JAVASCRIPT, WE CALL THIS 'THE CALLBACK HELL !!'
// we can control this in vanilla javascript using the async/await
// we can also do the same thing in node !!
// so i am going to comment the code below and do a better job !

/*
fs.writeFile(path.join(__dirname, "reply.txt"), writeData, (err) => {
    if (err) throw err
    console.log("Wrote in the file")

    fs.appendFile(path.join(__dirname, "reply.txt"), '\n\nAppend is working!!\n', (err) => {
        if (err) throw err
        console.log("Appended Data Successfully")

        fs.rename(path.join(__dirname, "reply.txt"), path.join(__dirname, "newReply.txt"), (err) => {
            if (err) throw err
            console.log("Renamed Successfully")
        })
    

    })

})
*/

// Let's do it better : ...

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile('starter.txt', 'utf-8')
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, "starter.txt"))        // this will delete the file
        await fsPromises.writeFile(path.join(__dirname, "reply.txt"), data)
        await fsPromises.appendFile(path.join(__dirname, "reply.txt"), writeData)
        await fsPromises.rename(path.join(__dirname, "reply.txt"), path.join(__dirname, "newReply.txt"))

        const newData = await fsPromises.readFile(path.join(__dirname, 'newReply.txt'))
        console.log(newData)

    } catch (err) {
        console.error(err)
    }
}

fileOps();





// we can exit if the program meets uncaught Errors using "process"
// The process object provides information about, and control over, the current node js process.

// console.log("----------------------------------------")
// console.log(process) - we can log the process object - it is very big

process.on('uncaughtException', err => {
    console.log(`There was an uncaught error : ${err}`)
    process.exit(1)
})

