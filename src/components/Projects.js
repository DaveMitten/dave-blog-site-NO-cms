import React, { Component }  from 'react'
// // import { StaticQuery, graphql } from 'gatsby'
// // import Image from 'gatsby-image'
// 


const projectData =[ 
	{ 
	title: 'Lifestyle',
	tech: ['javascript', 'react', 'html', 'css'],
	description: 'the stuff i did',
	links: {
		github: 'github address',
		web: 'web address'
	}
	},
	{ 
	Title: 'Magic 8 Ball',
	Tech: ['javascript', 'react', 'html', 'css', 'Netlify'],
	Description: 'the stuff i did',
	Links: {
		Github: 'github address'
	}
	},

]



function ProjectsList(props) {
	console.log('this is the props:', props)
		const list = 
		<div>
			<ul>
			{props.projectData.map((data) =>
				<li key={data.id}>
					<div>{data.title}</div>
					<div>Tech used:{data.tech} </div>
					<div>{data.description}</div>
					<div>Github:{data.links.github}</div>
					<div>Web:{data.links.web}</div>
				</li>
			)}
			</ul>
			</div>

			return (
				<div>
					{list}
				</div>
			)
	
}


class Projects extends Component {
	render() {
	  return (
		<div>
		<ProjectsList props={projectData} />
		</div>
	  )
	}
  }
  
  export default Projects

// https://reactjs.org/docs/lists-and-keys.html