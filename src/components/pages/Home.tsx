import React from "react";
import "../../styles/Home.css";
import { Nav } from "../molecules/Nav";
import { Header } from "../organisms/Header";
import { Main } from "../organisms/Main";
import { portfolioData } from "../portfolioData";
import { Outlet } from "react-router-dom";
import { ProjectLinks } from "../atoms/ProjectLinks";
import { Footer } from "../organisms/Footer";
import { DefaultProjects } from "../molecules/DefaultProjects";
import { useState } from "react";

function Home() {
  const [view, setView] = useState<boolean>(false);

  return (
    <>
      <Nav />
      <Header />
      <Main>
        <div className="links-container">
          <div className="links-list">
            {portfolioData.map((post) => (
              <ProjectLinks post={post} key={post.slug} setView={setView} />
            ))}
          </div>
        </div>
        <div className="visual-container">
          {view ? <Outlet /> : <DefaultProjects />}
        </div>
      </Main>
      <Footer />
    </>
  );
}

export { Home };
