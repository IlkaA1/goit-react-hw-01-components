import Transaction from './transaction';
import PropTypes from 'prop-types';
import css from './transaction.module.css';

const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <Transaction key={item.id} {...item} />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
