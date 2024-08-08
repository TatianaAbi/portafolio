import "../../styles/Home.css"
import { Nav } from "../molecules/Nav"
import { Header } from "../organisms/Header"
import { Main } from "../organisms/Main"
import { portafolioData } from "../portafolioData"
import {  Outlet } from "react-router-dom"
import { ProjectLinks } from "../atoms/ProjectLinks"
import { Footer } from "../organisms/Footer"
import { DefaultProjects } from "../molecules/DefaultProjects"
import { useState } from "react"

function Home() {
    const [view, setview]= useState(false)

    return(
    <>
    <Nav/>
    <Header/>
    <Main>
    <div className="links-container">
        <div className="links-list">
            {portafolioData.map(post=>(
                <ProjectLinks post={post} key={post.slug} setview={setview} />
            ))}
        </div> 
    </div>
    <div className="visual-container">
        {view ? <Outlet/> : <DefaultProjects/> }
    </div>
    </Main>
    <Footer/>

    </>
    )
}


export {Home}