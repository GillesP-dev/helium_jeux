// texte retourné
let rejected = "rejected";
let standard = "standard";
let special = "special";

//fonction encombrement
let resultEncombrant = function encombrant(width, height, length) {

    // calcul du volume
    let volume = width * height * length;

    return width > 50 || height > 50 || length > 50 || volume >= 125000;
};

function solve(width, height, length, mass) {

    // condition de classement
    if (resultEncombrant(width, height, length) && mass >= 5) {
        return rejected;
    } else if (resultEncombrant(width, height, length) || mass >= 5) {
        return special;
    } else { return standard };
}

let colis1 = { width: 50, height: 50, length: 25, mass: 4 };
let colis2 = { width: 50, height: 30, length: 100, mass: 2 };
let colis3 = { width: 20, height: 10, length: 30, mass: 7 };
let colis4 = { width: 80, height: 30, length: 60, mass: 5 };

console.log(solve(colis1.width, colis1.height, colis1.length, colis1.mass));
console.log(solve(colis2.width, colis2.height, colis2.length, colis2.mass));
console.log(solve(colis3.width, colis3.height, colis3.length, colis3.mass));
console.log(solve(colis4.width, colis4.height, colis4.length, colis4.mass));




