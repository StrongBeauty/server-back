const fs = require('fs')

exports.readJsonFromFile = (filePath) => {
    const promise = new Promise ((res, rej) => {
        fs.readFile(filePath, function (err, buf) {
            if (err) {
                rej(err)
            } else {
                res(JSON.parse(buf.toString()))
            }
        })
    })
    return promise
}

exports.writeJsonToFiles = (filePath, data) => {
    const promise = new Promise((res, rej) => {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) {
                rej(err)
            } else {
                res()
            }
        })
    })
    return promise
}


