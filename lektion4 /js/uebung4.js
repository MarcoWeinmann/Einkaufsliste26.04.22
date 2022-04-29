/**
 * Uebung 4: Bedingungen
 */

/**
 * 1) Erstelle deine if-Bedingung!
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");

  let ampel = "gruen";

  //ToDo: füge ab hier deinen Code ein
  // ampel.gruen ist ´true´
  if (ampel == "gruen") {
    console.debug("Du darfst fahren!")
    // zu ampel verschieben
  }

}

/**
 * 2) Erstelle deine if-Bedingung mit einem negativen Wert!
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  let ampel = "rot";

  //ToDo: füge ab hier deinen Code ein
  if (ampel != "gruen") {
    console.debug("Du musst halten!")
  }
}

/**
 * 3) Bastel deine if-else Ampel!
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  let ampel = "gruen";

  //ToDo: füge ab hier Deinen Code ein
  if (ampel == "gruen") {
    console.debug("Du darfst fahren!")
  }
  else {
    console.debug("Du musst halten!")
  }
}

/**
 * 4) Bastel deinen Switch Wochenkalender!
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================");

  let tag = 3;

  //ToDo: füge ab hier Deinen Code ein
  switch (tag) {
    case 1: console.debug("heute ist montag!")
          break
    case 2: console.debug("heute ist dienstag!")
          break
    case 3: console.debug("heute ist mittwoch!")
          break
    case 4: console.debug("heute ist donnerstag!")
          break
    case 5: console.debug("heute ist freitag!")
          break
    case 6: console.debug("heute ist samstag!")
          break
    case 7: console.debug("heute ist sonntag!")
        break
    defafult : console.debug("ist außerhalb der range!")
  }
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1();
  aufgabe2();
  aufgabe3();
  aufgabe4();
}
main();