import * as fs from 'fs';

async function readFile(filePath: string): Promise<string> {
    const fileContent = await fs.promises.readFile(filePath, "utf8");
    return fileContent;
}

async function writeFile(filePath: string, fileContent: string): Promise<void> {
    await fs.promises.writeFile(filePath, fileContent, "utf8");
}

async function copyFile(sourceFilePath: string, destinationFilePath: string): Promise<void> {
    try {
        const fileContent = await readFile(sourceFilePath);
        await writeFile(destinationFilePath, fileContent);
        console.log(`File copied from ${sourceFilePath} to ${destinationFilePath}`);
    } catch (err) {
        console.error(`An error occurred while copying the file ${err}`)
    }
}

async function main() {
    const sourceFilePath = "./test.txt";
    const destinationFilePath = "./copyFile.txt";

    try {
        await copyFile(sourceFilePath, destinationFilePath);
    } catch (err) {
        console.error(`An error occured: ${err}`);
    }
}

main();