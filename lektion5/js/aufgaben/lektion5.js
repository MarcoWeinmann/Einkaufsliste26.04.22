/**
 * Lektion 5: Schleifen
 */

/**
 * 1) Schreibe ein Array `artikelListe`, fülle es und geb es auf der Konsole mithilfe einer Schleife aus
 */
function artikelAuflisten() {
    // ToDo: füge ab hier deinen Code ein
let ArtikelListe = ["Brokoli", "Reis", "Streukäse"]
    for (const artikel of ArtikelListe) {
        console.debug(artikel)
    }
}

/**
 * 2) Erstelle die Arrays `milchListe`, `gemüseListe` und `getreideListe`, fülle diese, füge sie der gruppenListe hinzu und
 * gebe sie auf der Konsole aus
 */
function allesAuflisten() {
    let gruppenListe = []

// ToDo: füge ab hier deinen Code ein
    let gemueseliste = ["Brokoli", "Zwiebeln", "Salat"]
    let getreideListe = ["Reis", "Nudeln", "Quinoa"]
    let milchListe = ["Streukäse", "Sahne", "Joghurt"]
}

/**
 * 3) Erstelle ein befülltes Array `gemueseListe`, entferne diese Elemente aus dem Array und gebe es vor und nach dem Entfernen
 * auf der Konsole aus
 */
function artikelEntfernen() {
    // ToDo: füge ab hier deinen Code ein

}

/**
 * 4) Schreibe die Sortieren-Funktion
 */
function sortieren() {
    // ToDo: füge ab hier deinen Code ein
}

export {
    artikelAuflisten, allesAuflisten, artikelEntfernen, sortieren
}