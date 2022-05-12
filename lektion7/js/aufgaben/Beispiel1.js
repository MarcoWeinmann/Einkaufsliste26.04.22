//genre
//spieldauer
//fsk
//titel

//anzahl

class Filmliste {
    liste = []

    constructor(titel) {
        this.titel = titel
    }

    filmHinzufügen(film) {
        this.liste.push(film)

    }
    filmeHinzufügen(filme) {
        for (let i of filme) {
         //1.Durchlauf i=filme[0]
            //2.Durchlauf i=filme[1]
            //usw.
            this.liste.push(i)

        }

        for (let i = 0; i < filme.length; i++) {
            //1. Durchlauf i=0
            //2. Durchlauf i=1
            // usw.
            this.liste.push(filme[i])

        }

    }

    sortieren() {
        this.liste.sort()
    }
}



class Film {
    constructor(titel, spieldauer, fsk, genre, erscheinungsjahr, specialEdition) {
        this.titel = titel
        this.spieldauer = spieldauer
        this.fsk = fsk
        this.genre = genre
        this.erscheinungsjahr = erscheinungsjahr
        this.specialEdition = specialEdition
    }
}



let film1 = new Film("Avatar", 162, 12, "Scince-Fiction", 2009, true)
let film2 = new Film("Dune", 155, 12, "Scince-Fiction", 2021, false)
let film3 = new Film("Enemy at the Gates", 130, 16, "Drama", 2001, false)
let film4 = new Film("Iron Man", 126, 12, "Action", 2008, false)

let siFiListe = new Filmliste("Scince Fiction")
siFiLArray = [film1, film2]
siFiListe.filmHinzufügen(siFiArray)

