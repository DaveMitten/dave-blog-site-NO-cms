import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

// // import { StaticQuery, graphql } from 'gatsby'
// // import Image from 'gatsby-image'


class Projects extends Component {

  render() {
    // AOS.refresh()

    // const projectData = [
    //   {
    //     title: 'Note App',
    //     tech: ['Javascript', 'React', 'HTML', 'CSS', 'Slate JS', 'Netlify'],
    //     description: 'the stuff i did',
    //     links: {
    //       github: 'https://github.com/DaveMitten/note_app',
    //       web: 'https://awesome-raman-4a10cc.netlify.com/',
    //     },
    //   },
    //   {
    //     title: 'Lifestyle',
    //     tech: ['Javascript', 'React', 'HTML', 'CSS'],
    //     description: 'the stuff i did',
    //     links: {
    //       github: 'https://github.com/DaveMitten/k_and_d_proj_new',
    //       web: '#',
    //     },
    //   },
    //   {
    //     title: 'Javascript Game',
    //     tech: ['Javascript', 'HTML', 'CSS', 'Heroku'],
    //     description: 'the stuff i did',
    //     links: {
    //       github: 'https://github.com/DaveMitten/wdi-project-1',
    //       web: 'https://stark-cliffs-60304.herokuapp.com/',
    //     },
    //   },
    //   {
    //     title: 'Vegan Chef',
    //     tech: ['Javascript', 'Angular', 'HTML', 'CSS', 'Heroku'],
    //     description: 'the stuff i did',
    //     links: {
    //       github: 'https://github.com/DaveMitten/WHATSYOURBEEF',
    //       web: 'https://veganchef-dmitten.herokuapp.com/',
    //     },
    //   },
    //   {
    //     title: 'Ask A Question',
    //     tech: ['Javascript', 'Angular', 'HTML', 'CSS', 'Heroku'],
    //     description: 'the stuff i did',
    //     links: {
    //       github: 'https://github.com/DaveMitten/wdi-project-2',
    //       web: 'https://shielded-sea-54903.herokuapp.com/',
    //     },
    //   },

    //   {
    //     title: 'Magic 8 Ball',
    //     tech: ['Javascript', 'React', 'HTML', 'CSS', 'Netlify'],
    //     description: 'the stuff i did',
    //     links: {
    //       github: 'https://github.com/DaveMitten/magic-8-ball',
    //       web: 'WIP (work in progress)',
    //     },
    //   },

    //   {
    //     title: 'Fruit Machine Game',
    //     tech: ['Javascript', 'React', 'HTML', 'CSS', 'Slate JS', 'Netlify'],
    //     description: 'the stuff i did',
    //     links: {
    //       bitbucket: 'https://bitbucket.org/DaveMitten/davidjamesmitten/',
    //       web: 'https://angry-dijkstra-9097e8.netlify.com',
    //     },
    //   },
    // ]

    const projectDataDec2019 = [
      {
        title: 'Alqami data maturity journey',
        tech: [
          'ES6',
          'Javascript',
          'HTML',
          'CSS',
          'SASS',
          'fullpage.js',
          'AOS',
          'tippy.js',
        ],
        description:
          'Constructed a data maturity journey following a design. It uses various libraries along with sass and javascript. Custom animations. Custom modal (not included in site). No framework used.',
        links: {
          web: 'https://www.alqami.com/working-with-us/',
        },
      },
      {
        title: 'Kadiem Landing page',
        tech: ['ES6', 'Javascript', 'HTML', 'CSS'],
        description:
          'A landing page using javascript without frameworks. Implemented using a designers plan.',
        links: {
          web: 'https://www.kadiemgroup.com/',
        },
      },
      {
        title: 'Beatchain - Launchpad',
        tech: ['ES6', 'react', 'redux', 'Javascript', 'HTML', 'CSS3', 'SASS'],
        description:
          'Was in charge of the development of the launchpad. I built the modal and all logic that went with. I also maintained and added features through this area.',
        links: {
          web: 'https://www.beatchain.com/',
        },
      },
      {
        title: 'Tails.com',
        tech: [
          'ES6',
          ' Javascript',
          'Python-templates',
          ' HTML',
          ' CSS',
          ' SASS',
        ],
        description:
          'Helped the development and marketing teams with conversion from English to French for their move into the French market and helped the marketing team with implementing A/B testing. This was for the home page and sign-up journey ',
        links: {
          web: 'https://tails.com/',
        },
      },
      {
        title: 'Currikula',
        tech: [
          'ES6',
          ' Javascript',
          ' React',
          ' Context API',
          ' HTML',
          ' CSS',
          ' SASS',
          ' Ant-D',
        ],
        description:
          'Created a site with the CTO from the ground up using react and Ant-D styling framework. The site was created as the second version.',
        links: {
          web: 'https://version-2.currikula.com/',
        },
      },
    ]

    const projectsStyle = {
      overflow: 'auto',
      marginBottom: '20',
    }

    return (
      <div>
        <h2 style={{ borderBottom: '2px solid black' }}>Projects</h2>
        <div style={projectsStyle}>
          {projectDataDec2019.map((data, key) => (
            <Fade left
              key={data.id}
            >
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <div>
                <div class="tagContainer">
                  {data.tech.map((tech, i, arr) => {
                    return (
                      <div
                        key={i}
                        style={{
                          marginTop: '5px',
                          marginRight: '5px',
                          border: '2px solid #8C52FC',
                          padding: '2px 4px',
                        }}
                      >
                        {tech}
                      </div>
                    )
                  })}
                </div>
              </div>
              <div>
                <strong>{data.links.github ? 'Github:' : ''} </strong>
                <strong>{data.links.bitbucket ? 'Bitbucket: ' : ''} </strong>
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
            </Fade>
          ))}
        </div>
      </div>
    )
  }
}

export default Projects

// https://reactjs.org/docs/lists-and-keys.html
