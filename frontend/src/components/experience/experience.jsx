import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import React, { useState, useEffect } from "react";
import {skills} from "./port";

const Experience = () => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(skills);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = skills.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <section id = 'experience'>
      <h5>What Skills I Attain</h5>
      <h2>My Experiences</h2>
      <div className="skills__labels">
        <button className='btn btn-primary' active={filter === "all"} onClick={() => setFilter("all")}> All</button>
        <button className='btn btn-primary' active={filter === "frontend"} onClick={() => setFilter("data/ai")}> Data Analytics/ AI </button>
        <button className='btn btn-primary' active={filter === "mobile"} onClick={() => setFilter("webdev")}> Web Development</button>
      </div>
      <div className="skills__container">
        {projects.map(item =>
          item.filtered === true ? <span key={item.name}>{item.name}</span> : "")}
      </div>
    </section>
  )
}

export default Experience