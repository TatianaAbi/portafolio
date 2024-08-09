import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Nav } from '../molecules/Nav'
import { Header } from '../organisms/Header'
import { Main } from '../organisms/Main'
import { portfolioData } from '../portfolioData'
import { ProjectLinks } from '../atoms/ProjectLinks'
import { Footer } from '../organisms/Footer'
import { DefaultProjects } from '../molecules/DefaultProjects'

import '../../styles/Home.css'

function Home() {
  const [view, setView] = useState(false)

  return (
    <>
      <Nav />
      <Header />
      <Main>
        <div className='links-container'>
          <div className='links-list'>
            {portfolioData.map(post => (
              <ProjectLinks post={post} key={post.slug} setView={setView} />
            ))}
          </div>
        </div>
        <div className='visual-container'>
          {view ? <Outlet /> : <DefaultProjects />}
        </div>
      </Main>
      <Footer />
    </>
  )
}

export { Home }
