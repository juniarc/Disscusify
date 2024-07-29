import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

function CreateThreadBtn({ handleCreateThreadBtn }) {
    
    return (
        <button className='create-thread-btn' onClick={handleCreateThreadBtn}>
            Create Thread
            <FaPlus className='plus-icon'/>
        </button>
    )
}

CreateThreadBtn.propTypes = {
    handleCreateThreadBtn: PropTypes.func.isRequired,
}

export default CreateThreadBtn;