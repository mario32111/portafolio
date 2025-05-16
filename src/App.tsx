
import './App.css'
import NavBar from './components/navbar'
import Inicio from './components/Inicio'
import Tecnologias from './components/Tecnologias'
import Proyectos from './components/Proyectos'

function App() {

  return (
    <>
      <NavBar />
      <main className="content">
        <div>
          {/* Aquí iría el contenido principal de tu página */}
                <Inicio />
                <Tecnologias />
                <Proyectos />
        </div>
      </main>

    </>
  )
}

export default App
