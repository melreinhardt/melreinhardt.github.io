
interface karte {             // das karten interface wird initialisiert
    farbe : string;
    wertigkeit : number;
    nummer : number;
    zahlAufKarte: string;
}
                                    // mehrere Arrays
let Kartenstapel : karte [] = []    // Kartenziehstapel-Array
let spielerHand : karte[] = []      // Spielerhand Array
let Ablagestapel :karte [] =[]      // Karetnablagestapel Array
let gegnerHand : karte []=[]        // Gegnerhand Array

window.onload = function(){         // aufrufen der Funktionen beim laden der seite
    document.getElementById("ziehstapel").addEventListener("click", karteZiehen, false);  //zum karten zeihen auf ziehstapel klicken - eventlistener draufgelegt
    KartenGenerieren();
    austeilen();
    generateKartenHtml();
    
}

function KartenGenerieren(){           // die einzelnen karten des interfaces - werte werden jeder einzelnen karte zugeschrieben
    let blau1 : karte = {
        farbe: "blau",
        wertigkeit: 1,
        nummer: 1,
        zahlAufKarte: "1"
    }
    Kartenstapel.push(blau1);       // und jede in das kartenstapel array gepusht


    let blau2 : karte = {
        farbe: "blau",
        wertigkeit: 2,
        nummer: 2,
        zahlAufKarte: "2",
    }

    Kartenstapel.push(blau2)

    let blau3 : karte = {
        farbe: "blau",
        wertigkeit: 3,
        nummer: 3,
        zahlAufKarte: "3"
    }

    Kartenstapel.push(blau3)

    let blau4 : karte = {
        farbe: "blau",
        wertigkeit: 4,
        nummer: 4,
        zahlAufKarte: "4"
    }

    Kartenstapel.push(blau4)

    let blau5 : karte = {
        farbe: "blau",
        wertigkeit: 5,
        nummer: 5,
        zahlAufKarte: "5"
    }

    Kartenstapel.push(blau5)

    let blau6 : karte = {
        farbe: "blau",
        wertigkeit: 6,
        nummer: 6,
        zahlAufKarte: "6"

    }

    Kartenstapel.push(blau6)

    let blau7 : karte = {
        farbe: "blau",
        wertigkeit: 7,
        nummer: 7,
        zahlAufKarte: "7"
    }

    Kartenstapel.push(blau7)

    let blau8 : karte = {
        farbe: "blau",
        wertigkeit: 8,
        nummer: 8,
        zahlAufKarte: "8"
    }

    Kartenstapel.push(blau8)

    let grün1 : karte = {
        farbe: "grün",
        wertigkeit: 1,
        nummer: 9,
        zahlAufKarte: "1"
    }

    Kartenstapel.push(grün1)

    let grün2 : karte = {
        farbe: "grün",
        wertigkeit: 2,
        nummer: 10,
        zahlAufKarte: "2"
    }

    Kartenstapel.push(grün2)

    let grün3 : karte = {
        farbe: "grün",
        wertigkeit:3,
        nummer: 11,
        zahlAufKarte: "3"
    }

    Kartenstapel.push(grün3)

    let grün4 : karte = {
        farbe: "grün",
        wertigkeit: 4,
        nummer: 12,
        zahlAufKarte: "4"
    }

    Kartenstapel.push(grün4)

    let grün5 : karte = {
        farbe: "grün",
        wertigkeit: 5,
        nummer: 13,
        zahlAufKarte: "5"
    }

    Kartenstapel.push(grün5)

    let grün6 : karte = {
        farbe: "grün",
        wertigkeit: 6,
        nummer: 14,
        zahlAufKarte: "6"
    }

    Kartenstapel.push(grün6)

    let grün7 : karte = {
        farbe: "grün",
        wertigkeit: 7,
        nummer: 15,
        zahlAufKarte: "7"
    }

    Kartenstapel.push(grün7)

    let grün8 : karte = {
        farbe: "grün",
        wertigkeit: 8,
        nummer: 16,
        zahlAufKarte: "8"
    }

    Kartenstapel.push(grün8)

    let gelb1 : karte = {
        farbe: "gelb",
        wertigkeit: 1,
        nummer: 17,
        zahlAufKarte: "1"
    }

    Kartenstapel.push(gelb1)

    let gelb2 : karte = {
        farbe: "gelb",
        wertigkeit: 2,
        nummer: 18,
        zahlAufKarte: "2"
    }

    Kartenstapel.push(gelb2)

    let gelb3 : karte = {
        farbe: "gelb",
        wertigkeit: 3,
        nummer: 19,
        zahlAufKarte: "3"
    }

    Kartenstapel.push(gelb3)

    let gelb4 : karte = {
        farbe: "gelb",
        wertigkeit: 4,
        nummer: 20,
        zahlAufKarte: "4"
    }

    Kartenstapel.push(gelb4)

    let gelb5 : karte = {
        farbe: "gelb",
        wertigkeit: 5,
        nummer: 21,
        zahlAufKarte: "5"
    }

    Kartenstapel.push(gelb5)

    let gelb6 : karte = {
        farbe: "gelb",
        wertigkeit: 6,
        nummer: 22,
        zahlAufKarte: "6"
    }

    Kartenstapel.push(gelb6)

    let gelb7 : karte = {
        farbe: "gelb",
        wertigkeit: 7,
        nummer: 23,
        zahlAufKarte: "7"
    }

    Kartenstapel.push(gelb7)

    let gelb8 : karte = {
        farbe: "gelb",
        wertigkeit: 8,
        nummer: 24,
        zahlAufKarte: "8"
    }

    Kartenstapel.push(gelb8)

    let rot1 : karte = {
        farbe: "rot",
        wertigkeit: 1,
        nummer: 25,
        zahlAufKarte: "1"
    }

    Kartenstapel.push(rot1)

    let rot2 : karte = {
        farbe: "rot",
        wertigkeit: 2,
        nummer: 26,
        zahlAufKarte: "2"
    }

    Kartenstapel.push(rot2)

    let rot3 : karte = {
        farbe: "rot",
        wertigkeit: 3,
        nummer: 27, 
        zahlAufKarte: "3"
    }

    Kartenstapel.push(rot3)

    let rot4 : karte = {
        farbe: "rot",
        wertigkeit: 4,
        nummer: 28,
        zahlAufKarte: "4"
    }

    Kartenstapel.push(rot4)

    let rot5 : karte = {
        farbe: "rot",
        wertigkeit: 5,
        nummer: 29,
        zahlAufKarte: "5"
    }

    Kartenstapel.push(rot5)

    let rot6 : karte = {
        farbe: "rot",
        wertigkeit: 6,
        nummer: 30,
        zahlAufKarte: "6"
    }

    Kartenstapel.push(rot6)

    let rot7 : karte = {
        farbe: "rot",
        wertigkeit: 7,
        nummer: 31,
        zahlAufKarte: "7"
    }

    Kartenstapel.push(rot7)

    let rot8 : karte = {
        farbe: "rot",
        wertigkeit: 8,
        nummer: 32,
        zahlAufKarte: "8" 
    } 

    Kartenstapel.push(rot8)

Kartenstapel.sort(function(a,b)     // und anschließend noch gemischt
{return 0.5 - Math.random()})
}



function austeilen () {                         // mit dieser Funktion werden die Karten ausgeteilt 
    for (let i : number = 0; i < 5; i++) {      // solange die von mir mit 0 definierte variable i kleiner als 5 ist wird immer eine karte in das speiler bzw. gegnerhand array gepusht und aus dem kartenstapel array gelöscht | i++ steht dafür das "mitgezählt" wird --> so läuft die schleife so lange bis der computer als auch der spieler 5 karten hat
        spielerHand.push(Kartenstapel[0]);
        Kartenstapel.splice(0,1);               // erst wird bei splice festgelegt an welcher stelle im array das item rausgelöscht werden soll - in unserem fall am anfang (0) | die zweite zahl (1) gibt an wie viele rausgelöscht werden sollen

        gegnerHand.push(Kartenstapel[0]);
        Kartenstapel.splice(0,1);
    }
    Ablagestapel.push(Kartenstapel[0]);         // und eine karte wird auf den ablagestapel gepusht (außerhalb der schleife da wir nur eine dort haben wollen)
    Kartenstapel.splice(0,1);
    generateKartenHtml();                       // und die karten immer wieder neu im html generiert
}


function karteZiehen () {
    if(Kartenstapel.length > 0){            // wenn das kartenstapel array noch karten hat, kann eine karte gezogen werden
        spielerHand.push(Kartenstapel[0]);  // wieder mit push und splice
        Kartenstapel.splice(0,1);
        computerZug();                      // funktion computerZug wird aufgerufen --> damit abwechselnd gepielt wird
}
generateKartenHtml()                        // und die gezogenen Karten wieder im html generiert damit sie auch sichtbar sind
}

function karteSpielen (kartenNummer : number) {  // funktion die bedinungen festlegt um karten zu spielen mit dem parameter kartenNummer um auch die ganz bestimmte angeklickte karte abzugleichen und gegebenenfalls zu spielen
    if(spielerHand[kartenNummer].farbe == Ablagestapel[Ablagestapel.length-1].farbe || spielerHand[kartenNummer].wertigkeit == Ablagestapel[Ablagestapel.length-1].wertigkeit) {  // eine if bedinung die die angeklickte karte des spielers mit der letzten karte des ablagestapels (array) hinsichtlich der farbe sowie der wertigkeit vergleicht || wenn also farbe ODER wertigkeit übereinstimmen kan sie gespielt werden und wird  
        Ablagestapel.push(spielerHand[kartenNummer]); // wird die karte in das ablagestapel array gepusht  und 
        spielerHand.splice(kartenNummer,1); // genau die ausgewählte karte (kartenNummer) aus dem spieler hand array gelöscht
        generateKartenHtml();       // damit die gespielte karte auf dem ablagestapel sichtbar ist wird die funktion wieder aufgerufen um sie im html zu generieren
        computerZug();              // // funktion computerZug wird aufgerufen --> damit abwechselnd gepielt wird
    }

    else {
        alert("NOPE")       // wenn die vom süpieler ausgewählte karte NICHT gespielt werden kann erscheint diese Meldung
    }

    if (spielerHand.length == 0) {  // wenn das spielerhand array leer ist / keine karten mehr hat == 0 dann erscheint die meldung "gewonnen"
        alert("gewonnen");
        window.location.reload(true)  // damit die seite neu lädt und somit auch das spiel neu gestartet wird
    }
    
}

function computerZug () {       // funktion für den Computer der eigenständig spielt
    let schonGespielt : boolean = false; // boolean damit dann sichergestellt werden kann das er auch nur eine karte legt - ob er schon gespielt hat
    for (let o : number = 0; o < gegnerHand.length; o++) { // for schleife damit das gesamte array abgegangen werden kann und ein parameter den man nennt wenn man eine bestimmte ( die bestimmte karte bei dem die if bedinung geht - er was spielen kann - dann genau die gepusht und gespliced wirdalso gespielt wird )
        if(gegnerHand[o].farbe == Ablagestapel[Ablagestapel.length-1].farbe || gegnerHand[o].wertigkeit == Ablagestapel[Ablagestapel.length-1].wertigkeit) { // eine if bedinung die die karten des computers mit der letzten karte des ablagestapels (array) hinsichtlich der farbe sowie der wertigkeit vergleicht || wenn also farbe ODER wertigkeit übereinstimmen wird die erste bei der dies vorkommt gespielt  
            Ablagestapel.push(gegnerHand[o]); // die erste karte die eine der beiden bedinungen erfüllt (o) wird ins ablagestapel array gepusht
            gegnerHand.splice(o,1); // und aus dem array des computers gelöscht
            schonGespielt=true; // somit hat er schon einen zug getätigt und ist durch mit der runde
            generateKartenHtml();  // damit die gespielte karte auf dem ablagestapel sichtbar ist wird die funktion wieder aufgerufen um die karte (div und p) im html zu generieren
            break; // zug beendet -> spieler wieder dran
        }
    }
    if (Kartenstapel.length > 0 && schonGespielt == false ) { // falls keine karte gelegt werden konnte --> ziehen (gleiche funktionsweise mit push und splice wie beim spieler)
            gegnerHand.push(Kartenstapel[0]);
            Kartenstapel.splice(0,1);
            generateKartenHtml(); // generierung des kartenrückens - einer neuen karte im feld des computers
    }

    if (gegnerHand.length == 0) { // wen n der computer keine karten mehr hat - array leer ist dann kommt die meldung "verloren"
        alert("verloren");
        window.location.reload(true) // damit die seite neu lädt und somit auch das spiel neu gestartet wird
    }
   
}


let kartenHolderPlayer : string = "meineKartenHolding" // weil mehrmals gebraucht id hier im ts einer variable zugeschreiben - kennt es und schlägt es vor


function generateKartenHtml () {                                    // funktion um die karten im html zu generieren


    for (let i : number = 0; i < spielerHand.length; i++){      // schleife damit das array abgegangen werden kann und solviele karten generiert werden wie im array sind / ausgegeben wurden 
    let holdingDiv: HTMLElement = document.createElement("div");  // div wird erstellt - jede karte istein div
    holdingDiv.setAttribute("class", "karte");                      // mit der klasse karte
    holdingDiv.setAttribute("class", spielerHand[i].farbe + "");        // und den klassen je nachdem wie die farbe ist die der karte vorher unter "farbe" zugeschrieben wurde
    holdingDiv.addEventListener("click", function(){karteSpielen(i);}, false); // das legt auf jedes karten-div einen eventlisterner der beim anklicken die funktion karteSpielen aufruft 
    document.getElementById(kartenHolderPlayer).appendChild(holdingDiv); // das kartendiv wird ein kindknoten der section des spielerfeldes

    let kartWertigkeit: HTMLElement = document.createElement("p"); // ein paragraph wird generiert
    kartWertigkeit.innerHTML = spielerHand[i].zahlAufKarte; // as array wird der reihe nach durchgegangen und die zugeschriebene wertigkeit / zahl wird ausgegeben und ins p geschrieben
    holdingDiv.appendChild(kartWertigkeit); // als kind vom div 

    let umgekehrteKartWertigkeit: HTMLElement = document.createElement("p"); // das gleiche nochmal für die auf dem kopf stehende zahl
    umgekehrteKartWertigkeit.innerHTML = spielerHand[i].zahlAufKarte;
    holdingDiv.appendChild(umgekehrteKartWertigkeit);
    }

    for (let k : number = 0; k < gegnerHand.length; k++) {              // und nochmal für das gegnerfeld und die verdeckten karten
        let holdingDiv: HTMLElement = document.createElement("div");
        holdingDiv.setAttribute("class", "kartenrücken");
        document.getElementById("Computer").appendChild(holdingDiv);


    }


    let holdingDiv: HTMLElement = document.createElement("div");  // und nochmal für die aufgedeckten karten des ablagestapels
    holdingDiv.setAttribute("class", Ablagestapel[Ablagestapel.length-1].farbe + ""); // hier soll immer die letze karte des arrays generiert werden (-1) - weil nur einen generiert werden soll ist hier auch keine schleife von nöten 
    document.getElementById("ablagestapel").appendChild(holdingDiv);

    let kartWertigkeit: HTMLElement = document.createElement("p");
    kartWertigkeit.innerHTML = Ablagestapel[Ablagestapel.length-1].zahlAufKarte;
    holdingDiv.appendChild(kartWertigkeit);

    let umgekehrteKartWertigkeit: HTMLElement = document.createElement("p");
    umgekehrteKartWertigkeit.innerHTML = Ablagestapel[Ablagestapel.length -1].zahlAufKarte;
    holdingDiv.appendChild(umgekehrteKartWertigkeit);
    
}




    


