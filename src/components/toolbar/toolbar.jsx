import React from 'react';
import PropTypes from 'prop-types'

function Toolbar(props) {
    const {filters, selected, onSelectFilter } = props
    return (
      <div>
        {filters.map((filter, index) => {
          const className = filter === selected ? 'filter-selected' : 'filter'        
          return (
            <button className={className} onClick={e => onSelectFilter(filter)} key={`${index++}`}> {filter} </button>   
          )
        })}
      </div>
    )
  }

  export default Toolbar

  Toolbar.propTypes = {
    filters: PropTypes.array.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
    selected: PropTypes.string
  }