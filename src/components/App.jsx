import Profile from './profile/profile';
import user from './profile/user.json';
import Statistics from './statistics/statistics';
import data from './statistics/data.json';
import FiendsList from './friends/friendsList';
import friends from './friends/friends.json';
import TransactionHistory from './transactionHistory/transactionHistory';
import transactions from './transactionHistory/transactions.json';

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
