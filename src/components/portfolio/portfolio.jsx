import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../toolbar/toolbar.jsx';
import ProjectList from '../projectList/projectList.jsx';
import {filters, projects} from '../data/data.js';

class Portfolio extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        filters: filters,
        selected: filters[0],
        projects: projects
      }
    }
    handlerToggle = (filter) => {
     var selectedProjects = (filter === filters[0]) ? projects : projects.filter(item => item.category === filter)
      this.setState({
        selected: filter,
        projects: selectedProjects
      })
    }  
    render() {
      return(
        <div>
          <Toolbar
            filters={this.state.filters}
            selected={this.state.selected}
            onSelectFilter={(selected) => this.handlerToggle(selected)} />
          <ProjectList projects={this.state.projects} />
        </div>
      )
    }
  }

  export default Portfolio

  Portfolio.propTypes = {
    projects: PropTypes.array.isRequired,
    filters: PropTypes.array.isRequired
  }