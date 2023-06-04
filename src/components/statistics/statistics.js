import OneIndication from './oneIndication';
import PropTypes from 'prop-types';
import css from './statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    <h2 className="title">{title}</h2>

    <ul className={css.statList}>
      {stats.map(stat => (
        <OneIndication key={stat.id} {...stat} />
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
