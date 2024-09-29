import React from 'react';
import PropTypes from 'prop-types'

function ProjectList(props) { 
    const {projects} = props
    return (
      <div className="projectList">{ projects.map((project, index) => <div key={`${project.category}_${index++}`}><img alt={project.category} src={project.img}/></div>) }</div>
    )
  }

  export default ProjectList

  ProjectList.propTypes = {
    projects: PropTypes.array.isRequired
  }