import {AiFillCheckCircle} from 'react-icons/ai'
import React, { useState, useEffect } from "react";
import {mProjects} from "./moreproj";
import {tProjects} from "./tprojects";
import { FaGithub } from 'react-icons/fa';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import './portfolio.css'

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [tprojects, tsetProjects] = useState([]);


  useEffect(() => {
    setProjects(mProjects);
  }, []);

  useEffect(() => {
    tsetProjects(tProjects);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = mProjects.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);

  return (
    <div>
      <section id = "tport">
      <h5>Portfolio</h5>
      <h2>Top Projects</h2>
      <div className='portfolio_container'>
        {tprojects.map(proj =>
          <article className = "portfolio_item">
            <div className="portfolio_item-image">
              <img src={proj.img} alt={proj.name} />
            </div>
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <h5>{proj.addition}</h5>
            <div className="portfolio_item-cta">
              <a href = {proj.link} target= '_blank'><BsFillArrowUpRightCircleFill /></a>
              <a href = {proj.github} target= '_blank'><FaGithub /></a>
            </div>
            </article>)}
          </div>
          </section>
          <section id = 'portfolio'>
      <h5>Portfolio</h5>
      <h2>More Projects</h2>
      <div className="portfolio__labels">
        <button className='btn btn-primary' active={filter === "all"} onClick={() => setFilter("all")}> All</button>
        <button className='btn btn-primary' active={filter === "data/ai"} onClick={() => setFilter("data/ai")}> Data Analytics/ AI </button>
        <button className='btn btn-primary' active={filter === "webdev"} onClick={() => setFilter("web development")}> Web Development</button>
      </div>
      <div className='portfolio_container2'>
        {projects.map(item =>
          item.filtered === true ? 
          <article className = "portfolio_item2">
            {/* <div className="portfolio_item-image">
              <img src={item.img} alt={item.name} />
            </div> */}
            <h3>{item.name}</h3>
            <h5>{item.addition}</h5>
            <p>{item.description}</p>
            <div className="portfolio_item-cta">
              <a href = {item.link} target= '_blank'><BsFillArrowUpRightCircleFill /></a>
              <a href = {item.github} target= '_blank'><FaGithub /></a>
            </div>
            </article> : "")}
      </div>
    </section>
    </div>
  )
}

export default Portfolio