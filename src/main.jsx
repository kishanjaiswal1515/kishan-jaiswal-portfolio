import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';
import { projects, skills, tools } from './data/projects.js';

const Icon=({children})=><span className="icon" aria-hidden="true">{children}</span>;
function App(){
 const [open,setOpen]=useState(false);
 const nav=[['About','about'],['Skills','skills'],['Projects','projects'],['Experience','experience'],['Contact','contact']];
 return <div className="app">
  <header className="nav-wrap"><nav className="nav container"><a className="brand" href="#home">K J<span></span></a><button className="menu" onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button><div className={'nav-links '+(open?'open':'')}>{nav.map(([l,id])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{l}</a>)}<a
  className="resume-btn"
  href="https://drive.google.com/file/d/18v0vIgHW1E4XOfs32SWsCCAD8yUDnb8I/view?usp=sharing"
  target="_blank"
  rel="noreferrer"
>
  Resume ↗
</a></div></nav></header>
  <main>
   <section id="home" className="hero container"><div className="hero-copy"><div className="status"><span className="dot"/> Open to opportunities</div><p className="eyebrow">HELLO, I'M</p><h1>Kishan<br/><em>Jaiswal.</em></h1><p className="hero-text">Computer Science graduate exploring the intersection of software development, data and real-world problem solving.</p><div className="hero-actions"><a className="primary" href="#projects">View Projects ↗</a><a className="secondary" href="#contact">Let's Connect →</a></div><div className="socials"><a href="https://github.com/kishanjaiswal1515" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><div className="hero-card"><div className="grid-glow"/><div className="code-window"><div className="window-dots"><i/><i/><i/></div><pre>{`const kishan = {
  role: "B.Tech CSE graduate",
  focus: [
    "Web Development",
    "Data Analytics",
    "Building Projects"
  ],
  build: true
};`}</pre></div></div></section>
   <section id="about" className="section container"><Section eyebrow="01 / ABOUT" title="A little about me"/><div className="about-grid"><div className="about-lead"><p>I'm a B.Tech Computer Science graduate passionate about technology, problem-solving, and building practical projects. I enjoy exploring web development and data analytics while continuously learning and improving my skills.</p><p>I work with Java, C++, JavaScript, React, SQL, and Power BI, and use tools like Git, GitHub, VS Code, Vercel, and Netlify to build, manage, and deploy my projects. I'm interested in opportunities where I can keep learning while solving real-world problems.</p></div><div className="facts"><div><strong>2026</strong><span>Graduation</span></div><div><strong>03</strong><span>Featured Projects</span></div><div><strong>10+</strong><span>Core Skills</span></div></div></div></section>
   <section id="skills" className="section section-alt">
    <div className="container">
      <Section eyebrow="02 / SKILLS" title="Technologies I work with" text="Languages, frameworks and technologies I use to build my projects."/>
      <div className="skill-grid">
        {skills.map((skill, i) => (
          <div key={skill.name} className="skill-card">
            <span className="skill-number">{String(i + 1).padStart(2, '0')}</span>
            <img src={skill.icon} alt={skill.name} className="skill-logo" loading="lazy" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
      <Section eyebrow="TOOLS" title="Development Tools & Platforms" text="Tools I use to develop, manage and deploy my projects."/>
      <div className="skill-grid">
        {tools.map((tool, i) => (
          <div key={tool.name} className="skill-card">
            <span className="skill-number">{String(i + 1).padStart(2, '0')}</span>
            <img src={tool.icon} alt={tool.name} className="skill-logo" loading="lazy" />
            <span className="skill-name">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
   </section>
   <section id="projects" className="section container"><Section eyebrow="03 / PROJECTS" title="Projects I've Built" text="A selection of projects that reflect my skills, learning, and hands-on experience."/><div className="projects-grid">{projects.map((p,i)=><ProjectCard p={p} index={i} key={p.title}/>)}</div></section>
   <section id="experience" className="section section-alt"><div className="container"><Section eyebrow="04 / JOURNEY" title="Learning. Building. Growing"/><div className="timeline"><div className="timeline-item"><div className="timeline-dot"/><div><span className="date">2022 - 2026</span><h3>B.tech - Computer Science Engineering</h3><p>Built a strong foundation in programming, databases, web technologies, data analytics, and software development through coursework and hands-on projects.</p></div></div><div className="timeline-item"><div className="timeline-dot"/><div><span className="date">May - 2026</span><h3>Data Analyst Intern</h3><p>Gained hands-on experience with data analysis, data interpretation, reporting, and business-focused analytics workflows.</p></div></div><div className="timeline-item">
  <div className="timeline-dot"/>
  <div>
    <span className="date">2025 — 2026</span>
    <h3>Hands-on Projects</h3>
    <p>
      Built practical projects including SteganoCrypt, Sorting Visualizer, Digital - Khata,
      and Blinkit Sales Dashboard, applying development, problem-solving,
      and data analytics skills.
    </p>
  </div>
</div></div></div></section>
   <section id="contact" className="section contact container"><div className="contact-box"><div><span className="eyebrow">05 / CONTACT</span><h2>Let's build something<br/><em>useful.</em></h2><p>Have an opportunity, project idea or just want to connect? I'd be happy to hear from you.</p></div><div className="contact-actions"><a className="primary" href="mailto:kishanjaiswal@example.com">Email Me →</a><div className="contact-links"><a href="https://github.com/kishanjaiswal1515" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/kishan-jaiswal-b89369249/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></div></section>
  </main><footer><div className="container footer"><span>© 2026 Kishan Jaiswal</span><a href="#home">Back to top ↑</a></div></footer>
 </div>
}
function Section({eyebrow,title,text}){return <div className="section-head"><span>{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>}
function ProjectCard({p,index}){return <article className="project-card"><div className="project-icon">{index===0?'⌁':index===1?'↯':'▥'}</div><div className="project-top"><span>{p.category}</span><span>0{index+1}</span></div><h3>{p.title}</h3><p>{p.description}</p><div className="chips">{p.tech.map(t=><span key={t}>{t}</span>)}</div><div className="project-links">{p.github!=='#'?<a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>:<span className="muted-link">GitHub</span>}{p.live!=='#'?<a href={p.live} target="_blank" rel="noreferrer">Live Demo ↗</a>:<span className="muted-link">Dashboard</span>}</div></article>}

createRoot(document.getElementById('root')).render(<App/>);
