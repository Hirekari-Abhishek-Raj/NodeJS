const readline= require("readline")
function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const MyName=process.argv[process.argv.length-1];
    return MyName
}

function getNameFromEnv() {
    // Write your code here
    var name=process.env.name;
    return name
}

function getNameFromReadLine() {
    // Write your code here
    const read=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    var name=" "
    read.question(" ",MyName=>{
        name=MyName
        read.close()
    })
    return name
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}