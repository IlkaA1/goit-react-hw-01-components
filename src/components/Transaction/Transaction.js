import PropTypes from 'prop-types';
import css from './Transaction.module.css';

const Transaction = ({ id, type, amount, currency }) => (
  <tr>
    <td className={css.td}>{type}</td>
    <td className={css.td}>{amount}</td>
    <td className={css.td}>{currency}</td>
  </tr>
);

Transaction.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
