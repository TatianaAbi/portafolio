import React from "react";
import {  useParams } from "react-router-dom";
import { portfolioData } from "../portfolioData.js";
import "../../styles/Projects.css";
import { ImgContent } from "../atoms/ImgContent.js";
import { InfoBox } from "../atoms/InfoBox.js";
import { linksProject, project } from "../interfaces.js";

function Projects() {
  const { slug } = useParams<{slug: string}>();
  
  const blogData = portfolioData.find((post) => post.slug === slug);
  if(!blogData){
    return <p>no hay nada</p>
  }
  let projects:project[]  = blogData.projects

  return (
    <div className="carousel">
      {projects.map((project, index) => (
        <div className="element" key={index}>
          <picture className="project_images">
            <ImgContent style="project_image" img={project.img} />
          </picture>

          <div className="project-description center-item">
            <InfoBox sentence={project.text} title={project.title} />
          </div>
        </div>
      ))}
    </div>
  );
}

export { Projects };
