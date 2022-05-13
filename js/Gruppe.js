import [Artikel] from './Artikel.js'
import App from './Shopping.js'

class Gruppe {
  static counter = 1
  id = Gruppe.counter++
  index
  name
  artikelListe = []

  constructor(name, index) {
    this.name = name
    this.index = index
  }
}

export {Gruppe}