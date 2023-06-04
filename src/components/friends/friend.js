import PropTypes from 'prop-types';
import { Item } from './friendsListStyle';
import { Status } from './friendsListStyle';
import { Name } from './friendsListStyle';

const Friend = ({ avatar, name, isOnline, id }) => (
  <Item>
    <Status isOnline={isOnline}></Status>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>
);

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Friend;
