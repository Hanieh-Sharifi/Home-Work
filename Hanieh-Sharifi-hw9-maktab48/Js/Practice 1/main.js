const fs = require('fs')

//Reading the file
fs.readFile('./file.txt', 'utf8' , (err, data) => {
    if (err)
    {
        console.error(err)
        return
    }
    console.log(data)
})

//Creat a file
fs.appendFile('createdFile.txt', 'Content for the created file', function (err) {
    if (err)
    {
        console.log(err);
    }
    console.log('Created !');
});

//Update a file
fs.appendFile('./file.txt', '\nThis is the Updated Text !', function (err) {
    if (err)
    {
        console.log(err);
    }
    console.log('Updated the file.txt');
});

//delete a file
fs.unlink('./deletedFile.txt', function (err) {
    if (err)
    {
        console.log(err);
    }
    console.log('deletedFile.txt deleted!');
});

//rename a file
fs.rename('./fileForRename.txt', 'Renamed.txt', function (err) {
    if (err)
    {
        console.log(err);
    }
    console.log('your File Renamed!');
});