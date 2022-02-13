function heeHaw() {
    // get number from input
    const input = document.getElementById("number");
    const number = parseInt(input.value);

    const output = document.getElementById("output");
    output.innerHTML = "";

    if (isNaN(number) || number < 0) {
        output.innerHTML = "Please enter a number greater than 0.";
    } else {
        for (let i = 1; i <= number; i++) {
            if (i % 3 === 0) {
                output.innerHTML += "Hee!" + "<br>"
            } else if (i % 5 === 0) {
                output.innerHTML += "Haw!" + "<br>"
            } else if (i % 3 === 0 && i % 5 === 0) {
                output.innerHTML += "Hee Haw!" + "<br>"
            } else {
                output.innerHTML += i + "<br>";
            }
        }
    }
}