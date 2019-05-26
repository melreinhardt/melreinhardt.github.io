// TS Aufgabe 1 "Hallo Welt"//
console.log("Konsolen-Test");
window.onload = function () {
    console.log("Dokument ist geladen");
    window.alert('Wilkommen');
    document.getElementById('button2').addEventListener('click', changeButton);
    document.getElementById('B2.0').addEventListener('mouseover', changeClass);
    Rechnung();
    neuesElement();
    document.getElementById('TSB').addEventListener('click', verändereB);
};
function changeClass() {
    document.getElementById('B2.0').className = 'neuerKlassenname';
}
function neuesElement() {
    let button = document.createElement('button');
    let text = document.createTextNode('Ich wurde mit TS erstellt');
    button.appendChild(text);
    let Ausgabebereich = document.getElementById('main');
    Ausgabebereich.appendChild(button);
    button.id = 'TSB';
}
function createNewElement() {
    let myP = document.createElement('p');
    let myText = document.createTextNode('Rittersport');
    myP.appendChild(myText);
    let Ausgabebereich = document.getElementById('main');
    Ausgabebereich.appendChild(myP);
}
function init() {
    let element = document.getElementById('button');
    element.addEventListener('click', createNewElement);
}
document.addEventListener('DOMContentLoaded', init);
function changeButton() {
    document.getElementById('button2').innerHTML = 'Jetzt steht hier was Neues';
    console.log('Button-Text verändert sich');
}
function verändereB() {
    document.getElementById('button').innerHTML = 'Rittersport-Button';
}
function Rechnung() {
    let wort = 'Herzlich';
    let wortnr2 = 'Wilkommen';
    let nummer = 3;
    let nummer2 = 6;
    nummer2 = 2;
    console.log(wort + wortnr2); // Ausgabe Rechnung in Konsole
    console.log(nummer + nummer2);
    console.log(nummer + wort);
    console.log(Boolean(nummer < nummer2)); //Boolean
    console.log(Boolean(nummer > nummer2));
}
//# sourceMappingURL=script.js.map