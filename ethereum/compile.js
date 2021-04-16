const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

//remove build folder when compile.js is called
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

//connect to campaign.sol contract and read and compile contract file
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

//create build folder and create json file for each contract respectively
//json file contrains information like bytecode, interface, etc.
fs.ensureDirSync(buildPath);
for(let contract in output){
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}

