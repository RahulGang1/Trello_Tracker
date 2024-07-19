import React from 'react';
import './List.css';

const projectsData = [
  {
    name: "AppFusion",
    description: "This is a brief description of Project Alpha. It focuses on developing innovative solutions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCB3o4QGN0YrlAISh6ifWcxHGjZmfS830YA&s",
    status: "In Progress",
    tags: ["Innovation", "Tech"],
    progress: 60, 
    link: "#alpha"
  },
  {
    name: "ComponentHub",
    description: "This is a brief description of Project Beta. It aims to improve user experience through advanced UX/UI design.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXD8qqRsQi03zZ6SIT4ah_mUpJzrWZ8YK7DA&s",
    status: "Completed",
    tags: ["UX/UI", "Design"],
    progress: 100,
    link: "#beta"
  },
  {
    name: "InteractiveDashboard",
    description: "This is a brief description of Project Gamma. It deals with data analysis and machine learning algorithms.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTonc5wWQ9Hm7EiUhOBnxYpV33c-9lkGEwbHg&s",
    status: "Upcoming",
    tags: ["Data Science", "ML"],
    progress: 20,
    link: "#gamma"
  },
  {
    name: "ReactPulse",
    description: "This is a brief description of Project Alpha. It focuses on developing innovative solutions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklPE1QnI7Z6ZOMCUOvCymB1fiy98NWgbvAg&s",
    status: "In Progress",
    tags: ["Innovation", "Tech"],
    progress: 60, 
    link: "#alpha"
  },
  {
    name: "DynamicReact",
    description: "This is a brief description of Project Beta. It aims to improve user experience through advanced UX/UI design.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLpuy336hDvu-QK8oCOodA9wl8kc4a9-uIQ&s",
    status: "Completed",
    tags: ["UX/UI", "Design"],
    progress: 100,
    link: "#beta"
  },
  {
    name: "ComponentCraft",
    description: "This is a brief description of Project Gamma. It deals with data analysis and machine learning algorithms.",
    image: "https://external-preview.redd.it/GGzMXdPUxjoEKeIvvJDQySiHnhBf1pW3p5Lxkiw2J1s.png?format=pjpg&auto=webp&s=22ecb8c3409c8aa7304853e4ce9f5a8e249fda25",
    status: "Upcoming",
    tags: ["Data Science", "ML"],
    progress: 20,
    link: "#gamma"
  }
  
];

const List = () => {
  return (
    <div>

      <h1 className="list-title">Our Projects</h1>
      <br />
      <hr />
      <br />
    <div className="list-container">
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.name} className="project-image" />
          <div className="project-content">
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <span className={`project-status ${project.status.toLowerCase()}`}>{project.status}</span>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="project-tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">Learn More</a>
          </div>
        </div>
      ))}
    </div>
              </div>
  );
};

export default List;
