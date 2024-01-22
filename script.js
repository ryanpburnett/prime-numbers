let MAX_NUMBER = 1000;

const primes = () => {
    let out = [];

// loop through all numbers up to MAX_NUMBER
    for (let currentNumber = 1; currentNumber <= MAX_NUMBER; currentNumber++) {
        // test individual number
        for (let iterator = 1; iterator <= currentNumber; iterator++ ) {
            let flag = false
            // filter out 1 and current number as test cases
            if (iterator !== 1 && iterator !== currentNumber) {
                // test for divisors
                if (currentNumber % iterator === 0) {
                    flag = true;
                    return
                }
            }
            if (flag === false) {
                out.push(currentNumber)
            }
        }
    }

    return out;
}

console.log(primes())

// HTML
// let primes_content = document.getElementById('primes_content');

// let render = `
// <table>
//     <tr>
//         <th>Iteration</th>
//         <th>Value</th>
//     </tr>`;
// render += mil.map((item, index) => `
// <tr>
//     <td>${index + 1}</td>
//     <td>${item}</td>
// </tr>`).join('');
// render += `</table>`;

// primes_content.innerHTML = render;