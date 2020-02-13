const arr = ["banana", "apples", "pear", "cherry"];
let counter = 0

for (let i = 0; i < 4; i++) {
    const fruitNumber = prompt("Choose a number between 0-3");
    console.log(arr[fruitNumber]);
}