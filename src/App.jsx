import { Home } from './components/pages/Home'
import './App.css'
import { HashRouter,Route,Routes } from 'react-router-dom'
import { DefaultProjects } from './components/molecules/DefaultProjects'
import { Projects } from './components/organisms/Projects'
import { NotFound } from './components/molecules/NotFound'
import { Contact } from './components/pages/Contact'
import { AboutMe } from './components/pages/AboutMe'
import { Formulario } from './components/molecules/Formulario'

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
