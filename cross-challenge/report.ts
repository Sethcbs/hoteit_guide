//read from people.json, filter those over 18 years old, print in MD table, and write to adults.md
import * as fs from 'fs';

async function main() {
    fs.readFile('people.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

main().catch(console.error);
