import React from 'react'
import GruppenTag from './components/GruppenTag'

class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      //füge hier deinen HTML-Code ein
      <div id="container">
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
     <br/>
        <header>
          <h1>Einkaufsliste</h1>
          <nav>
            <input type="text" placeholder="Artikel hinzufügen"/>
              <button className="material-icons" >add_circle</button>
          </nav>
        </header>

        <hr/>

          <main>
            <section>
              <h2>Einkaufen
                <i className="material-icons">expand_less</i>
              </h2>
              <dl>
                <GruppenTag/>
              </dl>
            </section>
            <hr/>
              <section>
                <h2>Erledigt
                  <i className="material-icons">expand_less</i>
                </h2>
                <dl>
                  <GruppenTag/>
                </dl>
              </section>
          </main>
          <hr/>

            <footer>
              <nav>
                <button>
                  <span className="material-icons">bookmark_add</span> GRUPPEN
                </button>
                <button>
                  <span className="material-icons">sort</span> SORT
                </button>
                <button>
                  <span className="material-icons">settings</span> SETUP
                </button>
              </nav>
            </footer>
      </div>
    )
  }
}

export default ShoppingList
