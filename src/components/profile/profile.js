import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} width="250" />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>

    <ul className={css.stats}>
      <li>
        <span>Followers: </span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li>
        <span>Views: </span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li>
        <span>Likes: </span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
