import Profile from '../Profile/Profile';
import user from 'data/user.json';
import Statistics from '../Statistics/Statistics';
import data from 'data/data.json';
import FiendsList from '../Friends/FriendsList';
import friends from 'data/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

import css from './app.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FiendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
