let Kartenstapel = [];
let spielerHand = [];
let Ablagestapel = [];
let gegnerHand = [];
window.onload = function () {
    document.getElementById("ziehstapel").addEventListener("click", karteZiehen, false);
    KartenGenerieren();
    austeilen();
    generateKartenHtml();
};
function KartenGenerieren() {
    let blau1 = {
        farbe: "blau",
        wertigkeit: 1,
        nummer: 1,
        zahlAufKarte: "1"
    };
    Kartenstapel.push(blau1);
    let blau2 = {
        farbe: "blau",
        wertigkeit: 2,
        nummer: 2,
        zahlAufKarte: "2",
    };
    Kartenstapel.push(blau2);
    let blau3 = {
        farbe: "blau",
        wertigkeit: 3,
        nummer: 3,
        zahlAufKarte: "3"
    };
    Kartenstapel.push(blau3);
    let blau4 = {
        farbe: "blau",
        wertigkeit: 4,
        nummer: 4,
        zahlAufKarte: "4"
    };
    Kartenstapel.push(blau4);
    let blau5 = {
        farbe: "blau",
        wertigkeit: 5,
        nummer: 5,
        zahlAufKarte: "5"
    };
    Kartenstapel.push(blau5);
    let blau6 = {
        farbe: "blau",
        wertigkeit: 6,
        nummer: 6,
        zahlAufKarte: "6"
    };
    Kartenstapel.push(blau6);
    let blau7 = {
        farbe: "blau",
        wertigkeit: 7,
        nummer: 7,
        zahlAufKarte: "7"
    };
    Kartenstapel.push(blau7);
    let blau8 = {
        farbe: "blau",
        wertigkeit: 8,
        nummer: 8,
        zahlAufKarte: "8"
    };
    Kartenstapel.push(blau8);
    let grün1 = {
        farbe: "grün",
        wertigkeit: 1,
        nummer: 9,
        zahlAufKarte: "1"
    };
    Kartenstapel.push(grün1);
    let grün2 = {
        farbe: "grün",
        wertigkeit: 2,
        nummer: 10,
        zahlAufKarte: "2"
    };
    Kartenstapel.push(grün2);
    let grün3 = {
        farbe: "grün",
        wertigkeit: 3,
        nummer: 11,
        zahlAufKarte: "3"
    };
    Kartenstapel.push(grün3);
    let grün4 = {
        farbe: "grün",
        wertigkeit: 4,
        nummer: 12,
        zahlAufKarte: "4"
    };
    Kartenstapel.push(grün4);
    let grün5 = {
        farbe: "grün",
        wertigkeit: 5,
        nummer: 13,
        zahlAufKarte: "5"
    };
    Kartenstapel.push(grün5);
    let grün6 = {
        farbe: "grün",
        wertigkeit: 6,
        nummer: 14,
        zahlAufKarte: "6"
    };
    Kartenstapel.push(grün6);
    let grün7 = {
        farbe: "grün",
        wertigkeit: 7,
        nummer: 15,
        zahlAufKarte: "7"
    };
    Kartenstapel.push(grün7);
    let grün8 = {
        farbe: "grün",
        wertigkeit: 8,
        nummer: 16,
        zahlAufKarte: "8"
    };
    Kartenstapel.push(grün8);
    let gelb1 = {
        farbe: "gelb",
        wertigkeit: 1,
        nummer: 17,
        zahlAufKarte: "1"
    };
    Kartenstapel.push(gelb1);
    let gelb2 = {
        farbe: "gelb",
        wertigkeit: 2,
        nummer: 18,
        zahlAufKarte: "2"
    };
    Kartenstapel.push(gelb2);
    let gelb3 = {
        farbe: "gelb",
        wertigkeit: 3,
        nummer: 19,
        zahlAufKarte: "3"
    };
    Kartenstapel.push(gelb3);
    let gelb4 = {
        farbe: "gelb",
        wertigkeit: 4,
        nummer: 20,
        zahlAufKarte: "4"
    };
    Kartenstapel.push(gelb4);
    let gelb5 = {
        farbe: "gelb",
        wertigkeit: 5,
        nummer: 21,
        zahlAufKarte: "5"
    };
    Kartenstapel.push(gelb5);
    let gelb6 = {
        farbe: "gelb",
        wertigkeit: 6,
        nummer: 22,
        zahlAufKarte: "6"
    };
    Kartenstapel.push(gelb6);
    let gelb7 = {
        farbe: "gelb",
        wertigkeit: 7,
        nummer: 23,
        zahlAufKarte: "7"
    };
    Kartenstapel.push(gelb7);
    let gelb8 = {
        farbe: "gelb",
        wertigkeit: 8,
        nummer: 24,
        zahlAufKarte: "8"
    };
    Kartenstapel.push(gelb8);
    let rot1 = {
        farbe: "rot",
        wertigkeit: 1,
        nummer: 25,
        zahlAufKarte: "1"
    };
    Kartenstapel.push(rot1);
    let rot2 = {
        farbe: "rot",
        wertigkeit: 2,
        nummer: 26,
        zahlAufKarte: "2"
    };
    Kartenstapel.push(rot2);
    let rot3 = {
        farbe: "rot",
        wertigkeit: 3,
        nummer: 27,
        zahlAufKarte: "3"
    };
    Kartenstapel.push(rot3);
    let rot4 = {
        farbe: "rot",
        wertigkeit: 4,
        nummer: 28,
        zahlAufKarte: "4"
    };
    Kartenstapel.push(rot4);
    let rot5 = {
        farbe: "rot",
        wertigkeit: 5,
        nummer: 29,
        zahlAufKarte: "5"
    };
    Kartenstapel.push(rot5);
    let rot6 = {
        farbe: "rot",
        wertigkeit: 6,
        nummer: 30,
        zahlAufKarte: "6"
    };
    Kartenstapel.push(rot6);
    let rot7 = {
        farbe: "rot",
        wertigkeit: 7,
        nummer: 31,
        zahlAufKarte: "7"
    };
    Kartenstapel.push(rot7);
    let rot8 = {
        farbe: "rot",
        wertigkeit: 8,
        nummer: 32,
        zahlAufKarte: "8"
    };
    Kartenstapel.push(rot8);
    Kartenstapel.sort(function (a, b) { return 0.5 - Math.random(); });
}
function austeilen() {
    for (let i = 0; i < 5; i++) {
        spielerHand.push(Kartenstapel[0]);
        Kartenstapel.splice(0, 1);
        gegnerHand.push(Kartenstapel[0]);
        Kartenstapel.splice(0, 1);
    }
    Ablagestapel.push(Kartenstapel[0]);
    Kartenstapel.splice(0, 1);
    generateKartenHtml();
}
function karteZiehen() {
    if (Kartenstapel.length > 0) {
        spielerHand.push(Kartenstapel[0]);
        Kartenstapel.splice(0, 1);
        computerZug();
    }
    generateKartenHtml();
}
function karteSpielen(kartenNummer) {
    if (spielerHand[kartenNummer].farbe == Ablagestapel[Ablagestapel.length - 1].farbe || spielerHand[kartenNummer].wertigkeit == Ablagestapel[Ablagestapel.length - 1].wertigkeit) {
        Ablagestapel.push(spielerHand[kartenNummer]);
        spielerHand.splice(kartenNummer, 1);
        generateKartenHtml();
        computerZug();
    }
    else {
        alert("NOPE");
    }
    if (spielerHand.length == 0) {
        alert("gewonnen");
    }
}
function computerZug() {
    let schonGespielt = false;
    for (let o = 0; o < gegnerHand.length; o++) {
        if (gegnerHand[o].farbe == Ablagestapel[Ablagestapel.length - 1].farbe || gegnerHand[o].wertigkeit == Ablagestapel[Ablagestapel.length - 1].wertigkeit) {
            Ablagestapel.push(gegnerHand[o]);
            gegnerHand.splice(o, 1);
            schonGespielt = true;
            generateKartenHtml();
            break;
        }
    }
    if (Kartenstapel.length > 0 && schonGespielt == false) {
        gegnerHand.push(Kartenstapel[0]);
        Kartenstapel.splice(0, 1);
        generateKartenHtml();
    }
    if (gegnerHand.length == 0) {
        alert("verloren");
    }
}
let kartenHolderPlayer = "meineKartenHolding";
function generateKartenHtml() {
    document.getElementById(kartenHolderPlayer).innerHTML = "";
    for (let i = 0; i < spielerHand.length; i++) {
        let holdingDiv = document.createElement("div");
        holdingDiv.setAttribute("class", "karte");
        holdingDiv.setAttribute("class", spielerHand[i].farbe + "");
        holdingDiv.addEventListener("click", function () { karteSpielen(i); }, false);
        document.getElementById(kartenHolderPlayer).appendChild(holdingDiv);
        let kartWertigkeit = document.createElement("p");
        kartWertigkeit.innerHTML = spielerHand[i].zahlAufKarte;
        holdingDiv.appendChild(kartWertigkeit);
        let umgekehrteKartWertigkeit = document.createElement("p");
        umgekehrteKartWertigkeit.innerHTML = spielerHand[i].zahlAufKarte;
        holdingDiv.appendChild(umgekehrteKartWertigkeit);
    }
    document.getElementById("Computer").innerHTML = "";
    for (let k = 0; k < gegnerHand.length; k++) {
        let holdingDiv = document.createElement("div");
        holdingDiv.setAttribute("class", "kartenrücken");
        document.getElementById("Computer").appendChild(holdingDiv);
    }
    document.getElementById("ablagestapel").innerHTML = "";
    let holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", Ablagestapel[Ablagestapel.length - 1].farbe + "");
    document.getElementById("ablagestapel").appendChild(holdingDiv);
    let kartWertigkeit = document.createElement("p");
    kartWertigkeit.innerHTML = Ablagestapel[Ablagestapel.length - 1].zahlAufKarte;
    holdingDiv.appendChild(kartWertigkeit);
    let umgekehrteKartWertigkeit = document.createElement("p");
    umgekehrteKartWertigkeit.innerHTML = Ablagestapel[Ablagestapel.length - 1].zahlAufKarte;
    holdingDiv.appendChild(umgekehrteKartWertigkeit);
}
//# sourceMappingURL=uno.js.map