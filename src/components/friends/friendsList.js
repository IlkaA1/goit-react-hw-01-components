import Friend from '../OneFriend/Friend';
import PropTypes from 'prop-types';
import { FriendsList } from './FriendsListStyle';

const FiendsList = ({ friends }) => (
  <FriendsList>
    {friends.map(oneFriend => (
      <Friend key={oneFriend.id} {...oneFriend} />
    ))}
  </FriendsList>
);

FiendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FiendsList;
