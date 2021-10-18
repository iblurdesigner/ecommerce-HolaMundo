import {Component} from 'react'
import Layout from './components/Layout'

import {Productos} from './components/Productos'

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      {name: 'Alberjas', price: 1000, img: '/productos/arbejas.jpg'},
      {name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg'},
    ],
  }
  render() {
    return (
      <div>
        <Layout>
          <Productos
            agregarAlCarro={() => console.log('No hace nada')}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App
