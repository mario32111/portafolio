
import './App.css'
import NavBar from './components/navbar'
import Inicio from './components/Inicio'
import Tecnologias from './components/Tecnologias'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import SobreMi from './components/SobreMi'

function App() {

  return (
    <>
      <NavBar />
      <main className="content">
        <div>
          <Inicio />
          <SobreMi />
          <Tecnologias />
          <Proyectos />
          <Contacto />
        </div>
      </main>

    </>
  )
}

export default App
