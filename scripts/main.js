function solve() {

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

    let ac = 4 * a * c;

    console.log("4ac = " + ac);

    let bsqrd = Math.pow(b, 2);

    console.log("b^2 = " + bsqrd);

    let diff = bsqrd - ac;

    console.log("Diff = " + diff);

    let sqrt = Math.sqrt(diff);

    console.log("Sqrt = " + sqrt);

    let negb = -1 * b;

    console.log("-b = " + negb);

    let d1 = negb + sqrt;
    console.log("d1 = " + d1);
    let d2 = negb - sqrt;
    console.log("d2 = " + d2);

    let dbla = a * 2;
    console.log("2a = " + dbla);

    let x1 = d1 / dbla;
    let x2 = d2 / dbla;

    console.log("x1, x2 = " + x1 + x2);

    if (round) {
        x1 = Math.round(x1);
        x2 = Math.round(x2);
    }

    event.preventDefault();

    if (isNaN(x1)) {
        xone.innerHTML = "Imaginary";
    } else {
        xone.innerHTML = "X1 = " + x1;
    }
    
    if(isNaN(x2)) {
        xtwo.innerHTML = "Imaginary";
    } else {
        xtwo.innerHTML = "X2 = " + x2;
    }

}