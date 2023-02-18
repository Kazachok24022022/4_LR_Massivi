let roadMines = [false, true, false, false, true, false, false, false, false, false];
let damage = 0;

for (let i = 0; i < roadMines.length; ++i) 
{
    console.log(`Танк переместился на ${i + 1}`);
    if (roadMines[i] === true && damage === 0) {
        damage += 1;
        console.log('Танк повреждён');
    }else if (roadMines[i] === true && damage === 1) {
        damage += 1;
        console.log('Танк уничтожен')
        break;
    }
}   