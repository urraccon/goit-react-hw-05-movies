import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './RenderList.module.css';

const RenderList = ({ list }) => {
  const pagePath = useLocation();

  return (
    <>
      <ul className={styles.list}>
        {list.map(item => (
          <li key={item.id}>
            <Link
              to={`/movies/${item.id}`}
              className={styles.item}
              state={{
                from: pagePath,
              }}
            >
              <span>{item.nr + '. '}</span>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

RenderList.propTypes = {
  list: PropTypes.array,
};

export default RenderList;
