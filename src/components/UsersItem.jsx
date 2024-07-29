import React from 'react';

function UsersItem({ name, avatar }) {
    return (
        <div className='users-item__container'>
            <div className="users-item__img-container">
                <img src={avatar} alt={name + 'Avatar'} />
            </div>
            <p className='users-item__name'>{name}</p>
        </div>
        
    )
}

export default UsersItem;