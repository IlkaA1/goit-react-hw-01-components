import Friend from './friend';
import PropTypes from 'prop-types';
import { FriendsList } from './friendsListStyle';

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
