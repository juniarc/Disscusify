import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeMidContent from '../components/HomeMidContent';
import HomeLeftContent from '../components/HomeLeftContent';
import HomeRightContent from '../components/HomeRightContent';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncAddThread, asyncToggleUpVoteThread, asyncToggleDownVoteThread, asyncNeutralizeVoteThread } from '../states/threads/action';

function HomePage() {
    const threads = useSelector((states) => states.threads);
    const users = useSelector((states) => states.users);
    const authUser = useSelector((states) => states.authUser);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncPopulateUsersAndThreads());
    }, [dispatch]);

    const onUpVote = (threadId) => {
        dispatch(asyncToggleUpVoteThread(threadId))
    };

    const onDownVote = (threadId) => {
        dispatch(asyncToggleDownVoteThread(threadId))
    };

    const onThreadNeutralVote = (threadId) => {
		dispatch(asyncNeutralizeVoteThread(threadId))
	}

    const threadList = threads.map((thread) => ({
        ...thread,
        user: users.find((user) => user.id === thread.ownerId),
        authUser: authUser.id,
    }));


    return (
        <section className="home-page">
            <HomeLeftContent />
            <HomeMidContent threads={threadList} upVote={onUpVote} downVote={onDownVote} authUser={authUser} neutralVote={onThreadNeutralVote}/>
            <HomeRightContent authUser={authUser} users={users}/>
        </section>
    );

}

export default HomePage;