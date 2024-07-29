import React from "react";

function UserProfile({ avatar, name, email }) {
    return (
        <section className="user-profile__container">
            <div className="user-profile__img-container">
                <img className="user-profile__img" src={avatar} alt={name + 'Avatar'}  />
            </div>
            <div className="user-profile__text-container">
                <p className="user-profile__name">{name}</p>
                <p className="user-profile__email">{email}</p>
            </div>
        </section>
    )
}

export default UserProfile;