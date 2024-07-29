import React from 'react';
import CreateThreadBtn from './CreateThreadBtn';

function HomeLeftContent() {

    function onHandleChreateThreadBtn () {
        //
    }

    return (
        <section className='home-left-content'>
            <CreateThreadBtn handleCreateThreadBtn={onHandleChreateThreadBtn}/>
            <div className="home-left-content__category__container"></div>
        </section>
    )
}

export default HomeLeftContent;