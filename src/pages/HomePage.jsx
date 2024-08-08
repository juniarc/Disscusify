import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import HomeMidContent from '../components/home/HomeMidContent';
import HomeLeftContent from '../components/home/HomeLeftContent';
import HomeRightContent from '../components/home/HomeRightContent';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { resetFilteredThreads } from '../states/filteredThreads/action';
import {
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
  asyncNeutralizeVoteThread,
} from '../states/threads/action';
import { setCategories } from '../states/categories/action';

import '../styles/pages/HomePage.css';

function HomePage({ t }) {
  const threads = useSelector((states) => states.threads);
  const filteredThreads = useSelector((states) => states.filteredThreads);
  const users = useSelector((states) => states.users);
  const authUser = useSelector((states) => states.authUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCategories(threads));
    dispatch(resetFilteredThreads(threads));
  }, [threads, dispatch]);

  const onUpVote = (threadId) => {
    dispatch(asyncToggleUpVoteThread(threadId));
  };

  const onDownVote = (threadId) => {
    dispatch(asyncToggleDownVoteThread(threadId));
  };

  const onThreadNeutralVote = (threadId) => {
    dispatch(asyncNeutralizeVoteThread(threadId));
  };

  const threadList = filteredThreads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <HomeLeftContent t={t} />
      <HomeMidContent
        threads={threadList}
        upVote={onUpVote}
        downVote={onDownVote}
        neutralVote={onThreadNeutralVote}
        t={t}
      />
      <HomeRightContent authUser={authUser} users={users} t={t} />
    </section>
  );
}

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default HomePage;
