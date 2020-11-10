// modules
const os = require('os');
const http = require('http');
const readline = require('readline');
const fs = require('fs');

// Setup for localhost 
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
});

/*Displays and handles user interface */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Choose an option: \n 1. Read package.json \n 2. Display OS info \n 3. Start HTTP Server \n Type a number: ', (answer) => {

    //Checks if the answer is a number, or if it is in the interval between 1-3
    if (answer < 1 || answer > 3 || isNaN(answer)) {
        console.log("Invalid input, please input a number between 1-3");
    }
    else {
        switch (answer) {
            //Option for reading the json package
            case '1':
                readPackageJson();
                break;

            //Option for displaying the OS info
            case '2':
                readOSInfo();
                break;

            //Option for starting a server
            case '3':
                runServer();
                break;
            default:
        }
    }
    rl.close();
});

//Start a http Server
function runServer() {
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

//Read package.json
function readPackageJson() {
    fs.readFile(__dirname + '/package.json', 'utf-8', (err, content) => {
        console.log(content)
    });
}

// Display OS info
function readOSInfo() {
    console.log('OS Info:');
    console.log(`
        SYSTEM MEMORY: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' GB'}
        FREE MEMORY: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2) + ' GB'}
        CPU CORES: ${os.cpus().length}
        ARCH: ${os.arch()}
        PLATFORM: ${os.platform()}
        RELEASE: ${os.release()}
        USER: ${os.userInfo().username}
        `);
}
