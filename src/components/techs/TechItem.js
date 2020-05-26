import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { deleteTech } from '../../actions/techAction';

const TechItem = ({ tech: {id, firstName, lastName}, deleteTech}) => {
    const onDelete = () => {
        M.toast({ html: 'Technician delete' });
    }
    
    
    
    return (
        <li className='collection-item'>
        <div>
            {firstName} {lastName}
            <a href='#!' className='secodary-content' onClick={(onDelete) => deleteTech(id)}>
                <i className='material-icons grey-text'>delete</i>
            </a>
            </div>
        </li>
    );
};

TechItem.PropTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.fun.isRequired
};

export default connect(null, {deleteTech })(TechItem);