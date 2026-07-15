//read from people.json, filter those over 18 years old, print in MD table, and write to adults.md
import * as fs from 'fs';

async function main() {
    fs.readFile('people.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const people = JSON.parse(data);
        for(i = 0; i < len(people); i++){
            if(people[i].age >= 18){
                console.log(people[i].name);
            }
        }
    });
}

main().catch(console.error);
