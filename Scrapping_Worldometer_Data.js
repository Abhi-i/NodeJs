const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk');
request('https://www.worldometers.info/coronavirus/?fbclid=IwAR35ZFiRZJ8tyBCwazX2N-k7yJjZOLDQiZSA_MsJAfdK74s8f2a_Dgx4iVk',cb);
function cb(err,response,html){
    if(err) {
        console.log('error: ',err);//prints error if anyy
    }
    else {
        handleHtml(html);
    }
}
function handleHtml(html){
    let setTool = cheerio.load(html);
    let numbers = setTool('.maincounter-number');
    let total = setTool(numbers[0]).text();
    let deaths = setTool(numbers[1]).text();
    let rec = setTool(numbers[2]).text();
    console.log(chalk.blue.bgWhiteBright("Total Cases"+ total));
    console.log(chalk.white.bgRedBright("Total Deaths"+ deaths));
    console.log(chalk.white.bgGreenBright("Toal Recovered Cases"+ rec));
}