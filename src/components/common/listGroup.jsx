import React from 'react';
import propTypes from "prop-types";

const ListGroup = ({filters, textProperty, valueProperty, selectedFilter, onFilterSelect}) => {
    return ( 
        <ul className="list-group">
            {filters.map(filter => (
                <li 
                    className= {(selectedFilter === filter) ? "clickable list-group-item active" : "clickable list-group-item"} 
                    key={filter[valueProperty]? filter[valueProperty]:''}
                    onClick={() => onFilterSelect(filter)}
                >
                    {filter[textProperty]}
                </li>
            ))}
        </ul>
     );
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
};

ListGroup.propTypes = {
    filters: propTypes.array.isRequired, 
    // selectedFilter: propTypes.string.isRequired,
    onFilterSelect: propTypes.func.isRequired
}

export default ListGroup;