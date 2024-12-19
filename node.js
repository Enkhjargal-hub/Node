// Problem 1 banana daraagiin ugiig oloh

const fs = require("fs");

// Text бичих
fs.writeFile("./hello.txt", "shauidhsaiu", (err) => {
  if (err) {
    console.error("Алдаа гарлаа:", err);
  } else {
    console.log("Файл амжилттай бичигдлээ.");
  }
});   

// Text унших
fs.readFile("./text.txt", (err, content) => {
  if (err) {
    console.error("Алдаа гарлаа:", err);
    return;
  }

  const text = content.toString(); // Файл агуулгыг string болгон хөрвүүлэх
  const words = text.split(' ');   // Текстийг үгсээр салгах
  let nextWord = null;

  // "banana"-ийн дараагийн үгийг олох
  for (let i = 0; i < words.length - 1; i++) {
    if (words[i] === 'banana') {
      nextWord = words[i + 1];  // "banana"-ийн дараагийн үгийг олно
      break;
    }
  }

  if (nextWord) {
    console.log(`"banana"-ийн дараагийн үг: ${nextWord}`);
  } else {
    console.log('"banana" үгний дараах үг олдсонгүй.');
  }
});



// Problem 2 buh failiig jagsaah

const fs = require("fs");

fs.readdir('.', (err, files) => {  // Хаалт болон '=>' операторыг зөв ашиглах
  if (err) {
    console.error("Алдаа гарлаа:", err);
    return;
  }
  
  // Файлуудыг жагсаах
  console.log('Файлууд болон директорууд:', files);
});


