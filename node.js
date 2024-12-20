// // Problem 1 banana daraagiin ugiig oloh

// const fs = require("fs");

// // Text бичих
// fs.writeFile("./hello.txt", "shauidhsaiu", (err) => {
//   if (err) {
//     console.error("Алдаа гарлаа:", err);
//   } else {
//     console.log("Файл амжилттай бичигдлээ.");
//   }
// });

// // Text унших
// fs.readFile("./text.txt", (err, content) => {
//   if (err) {
//     console.error("Алдаа гарлаа:", err);
//     return;
//   }

//   const text = content.toString(); // Файл агуулгыг string болгон хөрвүүлэх
//   const words = text.split(' ');   // Текстийг үгсээр салгах
//   let nextWord = null;

//   // "banana"-ийн дараагийн үгийг олох
//   for (let i = 0; i < words.length - 1; i++) {
//     if (words[i] === 'banana') {
//       nextWord = words[i + 1];  // "banana"-ийн дараагийн үгийг олно
//       break;
//     }
//   }

//   if (nextWord) {
//     console.log(`"banana"-ийн дараагийн үг: ${nextWord}`);
//   } else {
//     console.log('"banana" үгний дараах үг олдсонгүй.');
//   }
// });

// // Problem 2 buh failiig jagsaah

// fs.readdir('.', (err, files) => {  // Хаалт болон '=>' операторыг зөв ашиглах
//   if (err) {
//     console.error("Алдаа гарлаа:", err);
//     return;
//   }

//   // Файлуудыг жагсаах
//   console.log('Файлууд болон директорууд:', files);
// });

// // Problem 3 merge

// const readline = require("readline");

// const mergeFiles = async (file1, file2, mergedFile) => {
//   const writer = fs.createWriteStream(mergedFile);

//   const mergeContent = async (file) => {
//     const reader = readline.createInterface({
//       input: fs.createReadStream(file),
//       crlfDelay: Infinity,
//     });

//     for await (const line of reader) {
//       writer.write(line + "\n");
//     }
//   };

//   try {
//     await mergeContent(file1);
//     await mergeContent(file2);
//     writer.end();
//     console.log(`Файлууд нэгтгэгдлээ: ${mergedFile}`);
//   } catch (err) {
//     console.error("Алдаа:", err.message);
//   }
// };

// // Файлын нэрүүд
// const file1 = "file1.txt";
// const file2 = "file2.txt";
// const mergedFile = "merged.txt";

// mergeFiles(file1, file2, mergedFile);

// import chalk from "chalk";

// console.log(chalk.green("Hello world"));

// Hereglegchees asuult asuugaad datag, songoson toogoor uusgej ugnu.

import { faker } from "@faker-js/faker";

// Хэрэглэгчийн профайлыг үүсгэх функц
function UserProfiles(numEntries) {
  const userProfiles = [];

  for (let i = 0; i < numEntries; i++) {
    const user = {
      name: faker.name.firstName() + " " + faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    };
    userProfiles.push(user);
  }

  return userProfiles;
}

// 2 хэрэглэгчийн профайлыг үүсгэх
const profiles = UserProfiles(2);
console.log(profiles);
