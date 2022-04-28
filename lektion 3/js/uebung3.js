/**
 * Uebung 3: Maps
 */

/**
 * 1) Erstelle die Map.
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");

  //ToDo: füge ab hier Deinen Code ein
const pizza = {
    title: "Funghi",
    num: "18",
   description: "Pizza-Liste",
   places: "3",
    belag: ["Käse", "Pilze", "Tomatensoße"],
      bewertung: "8/10",
  magIch: "true",
}
  console.debug(pizza)
}

/**
 * 2) Rufe keys, value und entries auf.
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  let ghibli = {
    name: "Studio Ghibli",
    gruendung: 1985,
    medium: "Anime"
  }

  //ToDo: füge ab hier in den debugs Deinen Code ein
  console.debug(Object.keys(ghibli)),
  console.debug(Object.values(ghibli))
  console.debug(Object.entries(ghibli))
}

/**
 * 3) Erstelle eine weitere Map.
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  //ToDo: füge ab hier Deinen Code ein
const kuenstler = {
    vorname: "Bob",
    nachname: "Marley",
    geboren: "06.02.1945",
    gestorben: "11.05.1981",
    taetigkeit: "Saenger",
    lieblingssong: "Jamming",

}
console.debug(kuenstler)
  for (let key of Object.keys(kuenstler)) {
    console.debug(key + ": " + kuenstler[key])
  }
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1()
  aufgabe2()
  aufgabe3()
}
main()