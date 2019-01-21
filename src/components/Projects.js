import React, { Component } from 'react'
// // import { StaticQuery, graphql } from 'gatsby'
// // import Image from 'gatsby-image'

class Projects extends Component {
  render() {
    const projectData = [
      {
        title: 'Vegan Chef',
        tech: ['Javascript', 'Angular', 'HTML', 'CSS', 'Heroku'],
        description: 'the stuff i did',
        links: {
          github: 'https://github.com/DaveMitten/WHATSYOURBEEF',
          web: 'https://veganchef-dmitten.herokuapp.com/',
        },
      },
      {
        title: 'Ask A Question',
        tech: ['Javascript', 'Angular', 'HTML', 'CSS', 'Heroku'],
        description: 'the stuff i did',
        links: {
          github: 'https://github.com/DaveMitten/WDI-project-4-client',
          web: 'https://still-beach-31973.herokuapp.com/',
        },
      },
      {
        title: 'Ask A Question',
        tech: ['Javascript', 'Angular', 'HTML', 'CSS', 'Heroku'],
        description: 'the stuff i did',
        links: {
          github: 'https://github.com/DaveMitten/wdi-project-2',
          web: 'https://shielded-sea-54903.herokuapp.com/',
        },
      },
      {
        title: 'Javascript Game',
        tech: ['Javascript', 'HTML', 'CSS', 'Heroku'],
        description: 'the stuff i did',
        links: {
          github: 'https://github.com/DaveMitten/wdi-project-1',
          web: 'https://stark-cliffs-60304.herokuapp.com/',
        },
      },
      {
        title: 'Lifestyle',
        tech: ['Javascript', 'React', 'HTML', 'CSS'],
        description: 'the stuff i did',
        links: {
          github: 'https://github.com/DaveMitten/k_and_d_proj_new',
          web: 'web address',
        },
      },
      {
        title: 'Magic 8 Ball',
        tech: ['Javascript', 'React', 'HTML', 'CSS', 'Netlify'],
        description: 'the stuff i did',
        links: {
          github: 'https://github.com/DaveMitten/magic-8-ball',
          web: '#',
        },
      },
      {
        title: 'Note App',
        tech: ['Javascript', 'React', 'HTML', 'CSS', 'Slate JS', 'Netlify'],
        description: 'the stuff i did',
        links: {
          github: 'https://github.com/DaveMitten/note_app',
          web: 'https://awesome-raman-4a10cc.netlify.com/',
        },
      },
      {
        title: 'Fruit Machine Game',
        tech: ['Javascript', 'React', 'HTML', 'CSS', 'Slate JS', 'Netlify'],
        description: 'the stuff i did',
        links: {
          bitbucket: 'https://bitbucket.org/DaveMitten/davidjamesmitten/',
          web: 'https://angry-dijkstra-9097e8.netlify.com',
        },
      },
    ]

    const projectsStyle = {
      overflow: 'auto',

      padding: '15px',
      marginBottom: '20',

    }

    return (
      <div>
      <h2 style={{ borderBottom: '2px solid black' }}>Projects</h2>
      <div style={projectsStyle}>

        {projectData.map((data, key) => (
          <div key={data.id}>
            <h3>{data.title}</h3>
            <div>
              <strong>Tech used: </strong>
              <div style={{ display: 'inline-flex' }}>
                {data.tech.map((tech, i, arr) => {
                  if (arr.length - 1 === i) {
                    return <div key={i}>{tech}.</div>
                  } else {
                    return <div key={i}>{tech}||</div>
                  }
                })}
              </div>
            </div>
            <div>
              <strong>{data.links.github ? 'Github:' : 'Bitbucket:'} </strong>
              <a href={data.links.github} target="_blank">
                {data.links.github || data.links.bitbucket}
              </a>
            </div>
            <div>
              <strong>Web: </strong>
              <a href={data.links.web} target="_blank">

                {data.links.web}
              </a>
            </div>
          </div>
        ))}
        {console.log(projectData)}
      </div>
      </div>
    )
  }
}

export default Projects

// https://reactjs.org/docs/lists-and-keys.html
