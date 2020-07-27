function solve() {

    event.preventDefault();
    // Get elements from the DOM and form submit
    let form = document.getElementById("form");

    let xone = document.getElementById("xone");
    let xtwo = document.getElementById("xtwo");

    let checkbox = document.getElementById("round");
    let round = checkbox.checked;
    
    let a = form.elements[0].value;
    let b = form.elements[1].value;
    let c = form.elements[2].value;

    console.log("Round = " + round);
    console.log(a, b, c);

    // Get some variables used in the equation
    let negb = -1 * b;
    let dbla = 2 * a;
    let ac = 4 * a * c;
    let bsqrd = Math.pow(b, 2);
    let diff = bsqrd - ac;
    console.log("b^2 = " + bsqrd);
    console.log("4ac = " + ac);
    console.log("Diff = " + diff);
    console.log("-b = " + negb);
    console.log("2a = " + dbla);
    let x1;
    let x2;

    // Negative determinant
    if (diff < 0) {

        console.log("Complex");

        // Operate with absolute values
        let absdiff = Math.abs(diff);
        let abssqrt = Math.sqrt(absdiff);
        console.log("Absdiff = " + absdiff);
        console.log("Abssqrt = " + abssqrt);
        
        let real = negb / dbla;
        let img = abssqrt / dbla;

        if (round) {
            real = Math.round((real + Number.EPSILON) * 100) / 100;
            img = Math.round((img + Number.EPSILON) * 100) / 100;
        }

        // Concatenate the results
        x1 = `${real} + ${img}¡`;
        x2 = `${real} - ${img}¡`;

    } else {

        // Operate normally
        let sqrt = Math.sqrt(diff);
        let d1 = negb + sqrt;
        let d2 = negb - sqrt;
        console.log("Sqrt = " + sqrt);
        console.log("d1 = " + d1);
        console.log("d2 = " + d2);

        x1 = d1 / dbla;
        x2 = d2 / dbla;

        if (round) {
            x1 = Math.round((x1 + Number.EPSILON) * 100) / 100;
            x2 = Math.round((x2 + Number.EPSILON) * 100) / 100;
        }
    }

    console.log("x1, x2 = " + x1 + x2);

    xone.innerHTML = "X1 = " + x1;
    
    xtwo.innerHTML = "X2 = " + x2;

}