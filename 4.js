const dninedeli = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
const nachalo = "вторник";
for (let i = 1; i <= 31; i++) 
    console.log(i + " января, " + dninedeli[(i + dninedeli.indexOf(nachalo) - 1) % 7])