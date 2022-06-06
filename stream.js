const fs = require('fs');

const readStream = fs.createReadStream('./docs/blogs1.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blogs4.txt', {encoding: 'utf8'});

readStream.on('data', (chunk) => {
    console.log(chunk)
    writeStream.write(chunk)
});

//piping
readStream.pipe(writeStream);