// modules
const os = require('os');
const http = require('http');
const readline = require('readline');

// Setup for localhost 
const hostname='localhost';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
});

/*Displays and handles user interface */
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

const optionReadPackage = '1. Read package.json';
const optionDisplayOSInfo = '2. Display OS info';
const optionStartHttpServer = '3. Start HTTP Server';


rl.question('Choose an option: \n 1. Read package.json \n 2. Display OS info \n 3. Start HTTP Server \n Type a number: ', (answer) => {
    
    console.log()

    switch(answer){
        case '1':
        break;
        case '2':
        break;
        //Option for starting a server
        case '3':
            runServer();
        break;
        default:
    }

    rl.close();
});

    //Start a http Server
    function runServer(){
        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });
    }



//Read package.json

// Display OS info



//if choosing an invalid number