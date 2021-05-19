const fs = require('fs');
let checker = false;
let result = []

fs.readFile('./name.txt', 'utf8' , (err1, data1) => {
    fs.readFile('./number.txt', 'utf8', (err2,data2) => {
        let idName = data1.split('\r\n')
        let idNumber = data2.split('\r\n')
        for (let i=0; i<idName.length; i++)
        {
            idName[i] = idName[i].split('-');
        }
        for (let i=0; i<idNumber.length; i++)
        {
            idNumber[i] = idNumber[i].split('-');
        }
        for (let i=0; i<idName.length; i++)
        {
            result = []
            result.push(idName[i][1])
            for (let j=0; j<idNumber.length; j++)
            {
                if (idName[i][0] == idNumber[j][0])
                {
                    result.push(idNumber[j][1])
                }
            }
            if (result.length == 1)
            {
                console.log(`${result[0]} hasn't any number`);
            }
            else if (result.length == 2)
            {
                console.log(`${result[0]}'s phone number is ${result[1]}`)
            }
            else
            {
                let numbersList = []
                for (let k=1;k<result.length;k++)
                {
                    numbersList.push(` ${result[k]}`)
                }
                numbersList.toString()
                console.log(`${result[0]}'s phone numbers are ${numbersList}`);
            }
        }
    });
});
