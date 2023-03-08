import * as fs from "fs";

interface FileWriterOptions {
    append?: boolean;
}

function writeSentenceToFile(sentence: string, filePath: string, options: FileWriterOptions = {}): void {
    const data = sentence + '\n';
    const { append = true } = options;
    const fileFlag = append ? 'a' : 'w';

    try {
        fs.writeFileSync(filePath, data, { flag: fileFlag });
        console.log(`Sentence "${sentence}" written to "${filePath}"`);
    } catch (error) {
        console.error(`Error writing sentence "${sentence}" to "${filePath}"`);
    }
}

const sentence = "This is a test sentence."
const filePath = './test.txt';

// Append sentence to file (default behavior)
writeSentenceToFile(sentence, filePath);

// Overwrite file with new sentence
writeSentenceToFile(sentence, filePath, { append: false });

