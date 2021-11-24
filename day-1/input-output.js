const prompt = require('prompt-sync')()
const chalk = require('chalk');

function inputText(question) {
    const answer = prompt(question);
    return answer;
}

function inputInt(question) {
    const answer = prompt(question);
    return parseInt(answer);
}

function output(text, textColor = 'green', backgroundColor = 'bgBlack') {
    console.log(chalk[textColor][backgroundColor](text));
}


module.exports.inputText = inputText;
module.exports.inputInt = inputInt;
module.exports.output = output;
