// INPUT: (use prompt)
// Set the counter

// CONSOLE OUTPUT:
// counter: 1
// counter: 2
// ...
// counter: 1000
// that's a lot
// counter: 1001
// ...

function counter() {
    let input = prompt("Set the counter ");
    for (let index = 1; index <= input; index++) {
        console.log(index);
    }
}

counter();