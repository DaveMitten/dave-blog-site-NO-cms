import React, { Component }  from 'react'
// // import { StaticQuery, graphql } from 'gatsby'
// // import Image from 'gatsby-image'


class Projects extends Component {
	
	render() {
		const projectData =[ 
			{ 
			title: 'Lifestyle',
			tech: ['Javascript', 'React', 'HTML', 'CSS'],
			description: 'the stuff i did',
			links: {
				github: 'github address',
				web: 'web address'
			}
			},
			{ 
			title: 'Magic 8 Ball',
			tech: ['Javascript', 'React', 'HTML', 'CSS', 'Netlify'],
			description: 'the stuff i did',
			links: {
				github: 'github address',
				web: 'web address'

			}
			},
		
		]

		const projectsStyle = {
			height: '100vh',
			
			}
	




	  return (
		<div style={projectsStyle}>
			<h2 style={{borderBottom: '2px solid black'}}>Projects</h2>
		{projectData.map((data, key) =>
				<div key={data.id}>
					<h3 >{data.title}</h3>
					<div><strong>Tech used: </strong>
					<div style={{display: 'inline-flex'}}>
					{data.tech.map((tech, i, arr) => {
						if (arr.length - 1 === i) {
						return <div key={ i }>{tech}.</div>
    					} else {
					return <div key={ i }>{tech},{' '}</div>
  					  }

					
					})}
					</div>

					</div>
					<div><strong>Description:</strong> {data.description}</div>
					<div><strong>Github:</strong> {data.links.github}</div>
					<div><strong>Web:</strong> {data.links.web}</div>
				</div>
			)}
		{console.log(projectData)}
		</div>
	  )
	}
  }
  
  export default Projects

// https://reactjs.org/docs/lists-and-keys.html