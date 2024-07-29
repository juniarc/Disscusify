import React from 'react';
import UserProfile from './UserProfile';
import UsersItem from './UsersItem'

function HomeRightContent({ authUser, users }) {
    const MAX_LENGTH = 20;
    const slicedUsers = users.slice(0, MAX_LENGTH);

    return (
        <section className='home-right-content'>
            <UserProfile {...authUser}/>
            <div className="user-list">
                <p className='user-list__title'>Active Users ({users.length})</p>
                <div className="user-list__container">
                {
                    slicedUsers.map((user) => (
                        <UsersItem key={user.id} {...user} />
                    ))
                }
                </div>
            </div>
        </section>
    )
}

export default HomeRightContent