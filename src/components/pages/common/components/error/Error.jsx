import PropTypes from 'prop-types';
import styles from './Error.module.css';

const Error = ({ error }) => {
  return (
    <div className={styles.container}>
      <div className={styles.messageBox}>
        <span className={styles.message}>{error}</span>
      </div>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
