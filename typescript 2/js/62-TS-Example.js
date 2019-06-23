// BEISPIEL UND AUFGABE:
// Dieses Skript soll als Beispiel dazu dienen, wie Interfaces und Arrays genutzt werden können.
// Hier wird ein ungefährer Aufbau eines simplen Klick-Spiels gezeigt. Der Nutzer kann dabei durch Button ein neues Monster erstellen.
// Zu beginn werden hier zuerst Interfaces, danach Variablen deklariert.
// Weiter unten kommen dann die Funktionen.
// ------- Variablen -------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Variablen: I (1 / einer)
let monsterHolder = "monsterHoldingCell"; // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.
let playerName = "Spielername"; // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP = 0; // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel = 500;
let playerLevel = 1;
let bereitsAbgerufen = false;
// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten.
let prefix = ["NASA-", "Pest-", "Dämliche(s) ", "Langsame(s) ", "Schwitzende(s) ", "Kniescheibenzertrümmernde(s) "]; // length = 6, da 6 Einträge. Von 0-5.
let monsterName = ["Anglerfisch", "Specht", "Hund", "Atze", "Uwe", "Pferd"]; // length = 3, da 3 Einträge. Von 0-2.
let suffix = [" des Zauberwaldes", " aus der Ozonschicht", " der Kummerhölle", " mit AIDS", " mit Komplexen", " der Unbesiegbarkeit"]; // length = 6, da hier 6 Einträge sind. Von 0-5.
let picScr = ["imgs/berle.jpg", "imgs/mietz.jpg", "imgs/hund.jpg", "imgs/ellie.jpg", "imgs/pferd.jpg", "imgs/wilma.jpg", "imgs/monter.jpg", "imgs/katze.jpg"];
let monsterModifers = ["Ist nervig", "Linkshänder", "Bier-Connoisseur", "Verfehlt häufig", "Prokrastiniert", "Müde", "Verwirrt", "Wasserscheu", "Bipolar", "Hat Schnupfen", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
let monsterPofB = ["Nordpol", "Mond", "Mars", "china", "Kambodia", "unknown", "Russland"];
// -- Initialisierung für viele/variable Anzahl an Monster --
let monsterArray = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray); // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.
// ----------- Funktionen ----------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Funktionen: IIIII (5 / fünf)
// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufügen
window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    updatePlayerLevel(0); // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
    document.getElementById("fightall").addEventListener("click", fightAllMonsters, false);
    document.getElementById("allweak").addEventListener("click", fightAllWeakMonsters, false);
    document.getElementById("weakest").addEventListener("click", fightWeakestMonster, false);
};
//console.log(document.getElementById("monsterSpawner").innerHTML);
// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.
function generateMonster() {
    let newNr = getRNGNumber(3) + 1;
    for (let i = 0; i < newNr; i++) {
        let newMonsterName = generateMonsterName(); // Eigens-gebaute Funktion, welche einen string zurück gibt.
        let newMonsterHP = generateMonsterHitPoints(); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterXP = generateMonsterXP(); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterModifier = generateMonsterModifer(); // Eigens-gebaute Funktion, welche ein string-Array zurück gibt.
        let newMonsterPic = generateMonsterPic();
        let newMonsterPoB = generateMonsterPoB();
        let newMonsterLevel = getRNGNumber(11);
        let newMonster = {
            monsterName: newMonsterName,
            monsterHealthPoints: newMonsterHP,
            monsterExperience: newMonsterXP,
            monsterModifier: newMonsterModifier,
            monsterPic: newMonsterPic,
            monsterPoB: newMonsterPoB,
            monsterLevel: newMonsterLevel
        };
        monsterArray.push(newMonster);
        console.log(monsterArray[monsterArray.length - 1].monsterExperience); // Man kann nur auf Array-Teile zugreifen, welche definiert sind. -1 ist nicht definitiert (und wird es auch nie sein).
        //monsterGenerateHTML();    
    }
    updateHTML(); // Triggere die Generierung von HTML
}
function updateHTML() {
    clearMonsterCell();
    monsterGenerateHTMLAll();
    console.log("Es sind " + getMonsterCount() + " Monster auf dem Spielfeld");
}
function getMonsterCount() {
    return monsterArray.length;
}
function monsterGenerateHTMLAll() {
    for (let i = 0; i < getMonsterCount(); i++) {
        monsterGenerateHTML(i);
    }
}
function clearMonsterCell() {
    let monsterSheldon = document.getElementById(monsterHolder);
    while (monsterSheldon.firstChild) {
        monsterSheldon.removeChild(monsterSheldon.firstChild);
    }
}
// Generiert HTML-Elemente, welche dann einem Element untergeordnet werden. Erzeugt ebenfalls einen Event-Listener auf dem Button.
function monsterGenerateHTML(i) {
    let holdingDiv = document.createElement("div"); // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
    holdingDiv.setAttribute("id", "monster" + i); // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.
    holdingDiv.setAttribute("class", "monster"); // Klasse für Visuals.
    document.getElementById(monsterHolder).appendChild(holdingDiv); // Das HTML-Element muss erst noch zu einem Objekt hinzugefügt werden, in diesem Fall mit der id "monsterHoldingCell"
    let monsterName = document.createElement("p"); // Generiere einen <p>
    monsterName.innerHTML = monsterArray[i].monsterName; // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterName); // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.
    let monsterMod = document.createElement("p"); // Generiere einen <p>
    monsterMod.innerHTML = monsterArray[i].monsterModifier[0] + ", " + monsterArray[i].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
    holdingDiv.appendChild(monsterMod); // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.
    let monsterImg = document.createElement("img"); // Erstelle ein <img>-Element
    monsterImg.setAttribute("src", monsterArray[i].monsterPic); // Der Pfad für das Bild muss über setAttribute festgelegt werden. Der Bildpfad kann natürlich auch anders aussehen.
    monsterImg.setAttribute("alt", "Schreckliches Monster");
    monsterImg.classList.add("moImg"); // Das alt für das Bild wird hier festgelegt.
    holdingDiv.appendChild(monsterImg); // Füge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)
    let monsterP = document.createElement("p");
    monsterP.innerHTML = monsterArray[i].monsterPoB;
    holdingDiv.appendChild(monsterP);
    let monsterBtn = document.createElement("BUTTON"); // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Monster bekämpfen!"; // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
    holdingDiv.appendChild(monsterBtn); // Füge den Button zu dem holding-div hinzu.
    let monsterCount = i; // Die aktuelle Anzahl vorhandener Monster, zudem auch die neue Zahl für das Monster-Array.
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);
    let monsterHP = document.createElement("p");
    monsterHP.innerHTML = "Health Points:" + monsterArray[i].monsterHealthPoints;
    holdingDiv.appendChild(monsterHP);
    let monsterXP = document.createElement("p");
    monsterXP.innerHTML = "Experience:" + monsterArray[i].monsterExperience;
    holdingDiv.appendChild(monsterXP);
    let monsterLvl = document.createElement("p");
    monsterLvl.innerHTML = "Level: " + monsterArray[i].monsterLevel;
    holdingDiv.appendChild(monsterLvl);
    monsterBtn.addEventListener(// Füge dem Monster eine Funktion hinzu.
    'click', function () {
        fightMonster(monsterCount); // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
    }, false); // Ignoriert das false.
}
// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
// [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
function getRNGNumber(_maxNumber) {
    let rngNumber = Math.random(); // Macht folgendes: Generiere eine zufällige Komma-Zahl zwischen 0 - 1.
    rngNumber = rngNumber * _maxNumber; // Multipliziere diese Zahl mit der Länge des entsprechenden Array (hier: _maxNumber, ein Parameter, siehe in der runden Klammer der Funktion).
    rngNumber = Math.floor(rngNumber); // Floore diese Zahl, damit diese nun Ganzzahlig ist.                                                    // Diese Zeile ist einer der drei Fehler in den Funktionen. Ich bin mal so frei und vermerke das hier. Einfach löschen und alles wird besser.
    return rngNumber; // Gebe diese Zahl zurück, Funktion kann ähnlich einer Variable in Rechnungen genutzt werden.
}
// Diese Funktion gibt einen zusammengewürfelten Namen zurück.
// Wird für die Monster-generierung verwendet!
// Liefert einen zusammengesetzten String zurück.
function generateMonsterName() {
    let generatedMonsterName = ""; // Erstelle einen leeren String für das Monster
    // Monster-Vorname
    // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
    let rngNumber = getRNGNumber(prefix.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    return generatedMonsterName;
}
// Wird für die Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterHitPoints() {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 10) + 1 zurück.
    let tempMonsterHP = 1 + getRNGNumber(10);
    return tempMonsterHP;
}
// Wird für die Erstellung der Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterXP() {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 350) + 100 zurück.
    let tempMonsterXP = 100 + getRNGNumber(999);
    return tempMonsterXP;
}
// Wird für die Erstellung der Monster-Modifizierer aufgerufen.
// Liefert ein Array mit zwei Einträgen zurück.
function generateMonsterModifer() {
    let tempMonsterMod = []; // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)]; // Setze Schublade 0 des Arrays auf einen Wert.
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)]; // Setze Schublade 1 des Arrays auf einen Wert.
    return tempMonsterMod; // Gebe das hier zusammengesetzte Array wieder zurück.
}
function generateMonsterPic() {
    let rngNumber = getRNGNumber(picScr.length); // Diese Funktion gibt einen zufälligen Bild-Pfad zurück.
    return picScr[rngNumber];
}
function generateMonsterPoB() {
    let rngNumber = getRNGNumber(monsterPofB.length);
    return monsterPofB[rngNumber];
}
// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.
function fightMonster(_index) {
    if (monsterArray[_index].monsterLevel <= playerLevel) {
        console.log("Spieler gewinnt gegen Monster");
        updatePlayerLevel(monsterArray[_index - 1].monsterExperience);
        monsterArray.splice(_index - 1, 1);
        playerXP += monsterArray[_index].monsterExperience;
        updateHTML();
    }
    else if (playerLevel < monsterArray[_index - 1].monsterLevel) {
        console.log("Monster gewinnt, Spieler verloren, Streifen verrutscht");
        updatePlayerLevel((monsterArray[_index - 1].monsterExperience) * (-1));
    }
    updateHTML(); // _index ist in diesem Fall die Länge des Arrays - allerdings zählt der Computer beginnend von null, nicht eins! Deshalb _index-1.
    updatePlayerLevel(0);
}
// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
function updatePlayerLevel(operator) {
    playerLevel = (Math.floor(playerXP / playerXPperLevel)) + 1;
    if (playerXP + operator > 0) {
        playerXP += operator;
    }
    else {
        playerXP = 0;
    }
    if (playerLevel == 20 && bereitsAbgerufen == false) {
        alert("Du hast Level 20 erreicht und gewonnen");
        bereitsAbgerufen = true;
    }
    document.getElementById("xpCounter").innerHTML = "Player-Level: " + playerLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")"; // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + playerLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)"); // Spieler-Level in der Konsole.
}
function neuerPoB() {
    console.log("neue Places of Birth werden zum array hinzugefügt");
    monsterPofB.push("Mariannengraben");
    monsterPofB.push("hinter den Bergen bei den 7 Zwergen");
    monsterPofB.push("Chile");
    monsterPofB.push("Japan");
    console.log("fertig");
}
neuerPoB();
console.log(monsterPofB);
function fightAllWeakMonsters() {
    for (let i = monsterArray.length; i > 0; i--) {
        if (playerLevel > monsterArray[i - 1].monsterLevel) {
            fightMonster(i);
        }
    }
}
function fightAllMonsters() {
    for (let i = monsterArray.length; i > 0; i--) {
        fightMonster(i);
    }
}
function fightWeakestMonster() {
    let tempWeakest = monsterArray.length;
    for (let i = monsterArray.length; i > 0; i--) {
        if (monsterArray[tempWeakest - 1].monsterLevel > monsterArray[i - 1].monsterLevel)
            tempWeakest = i;
    }
    fightMonster(tempWeakest);
}
//# sourceMappingURL=62-TS-Example.js.map