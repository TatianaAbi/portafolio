import { Home } from './components/Home'
import './App.css'
import { HashRouter,Route,Routes } from 'react-router-dom'
import { DefaultProjects } from './components/DefaultProjects'
import { Projects } from './components/Projects'
import { NotFound } from './components/NotFound'
import { Contact } from './components/Contact'
import { AboutMe } from './components/AboutMe'
import { Formulario } from './components/Formulario'

function App() {
  return(
    <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>} >
              <Route path='default' element={<DefaultProjects/>}  />
              <Route path=':slug' element={<Projects/>} />
          </Route>
          <Route path='/about' element={<AboutMe/> } />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/email' element={<Formulario/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
    </HashRouter>
  )
}

export default App
