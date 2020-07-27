function solve() {

    let form = document.getElementById("form");

    let xone = document.getElementById("xone");
    let xtwo = document.getElementById("xtwo");
    
    let a = form.elements[0].value;
    let b = form.elements[1].value;
    let c = form.elements[2].value;

    console.log(a, b, c);

    let ac = -4 * a * c;

    console.log("-4ac = " + ac);

    let bsqrd = Math.pow(b, 2);

    console.log("B squared = " + bsqrd);

    let diff = bsqrd - ac;

    console.log("Diff = " + diff);

    if (diff < 0) {
        alert("Imaginary lol");
        return 1;
    }

    let sqrt = Math.sqrt(diff);

    console.log("Sqrt = " + sqrt);

    let negb = -1 * b;

    console.log("Minus b = " + negb);

    let d1 = negb + sqrt;
    let d2 = negb - sqrt;

    console.log(d1, d2);

    let dbla = a * 2;

    console.log(dbla);

    let x1 = d1 / dbla;
    let x2 = d2 / dbla;

    event.preventDefault();

    xone.innerHTML = "X1 = " + x1;
    xtwo.innerHTML = "X2 = " + x2;
}