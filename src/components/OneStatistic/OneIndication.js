import PropTypes from 'prop-types';
import css from './OneIndication.module.css';

const OneIndication = ({ id, label, percentage }) => (
  <li className={css.item}>
    <span>{label}</span>
    <span>{percentage}%</span>
  </li>
);

OneIndication.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default OneIndication;
