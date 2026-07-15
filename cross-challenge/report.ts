//read from people.json, filter those over 18 years old, print in MD table, and write to adults.md
import * as fs from "fs/promises";

interface Person{
    firstname: string;
    age: number;
    city: string;
}

async function FetchPeople(): Promise<Person[] | null> {
    try{
        const data = await fs.readFile("people.json", "utf8");
        const parsed: Person[] = JSON.parse(data);
        return parsed.people;
    } catch (error) {
        console.error("Failed to read people.json:", error);
        return null;
    }
}

function FilterData(people: Person[]): Person[]{
    return people.filter(people => people.age >= 18);
}

function ToMDTable(people: Person[]): string{
    let table = "";
    const header = "| Name | Age | City |\n| --- | --- | --- |\n";
    let rows: string = "";
    for (let i = 0; i < people.length; i++){
        rows = rows.concat(`| ${people[i].firstname} | ${people[i].age} | ${people[i].city} |\n`);
    }
    table = table.concat(header);
    table = table.concat(rows);
    return table;
}

async function main() {
    const person = await FetchPeople();
    const adults = FilterData(person);
    const table = ToMDTable(adults);

    console.log(table);
    await fs.writeFile("adults.md", table, "utf8");
}

main().catch(console.error);
