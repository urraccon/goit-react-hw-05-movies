import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <Oval
        visible={true}
        height="60"
        width="60"
        color="#ff3d5e"
        secondaryColor="#ff3d5e"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
