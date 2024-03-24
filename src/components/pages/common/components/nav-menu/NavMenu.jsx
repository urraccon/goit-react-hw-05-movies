import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';

const NavMenu = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navMenu}>
        <li key="home">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? styles.navBtn + ' ' + styles.navBtnActive
                : styles.navBtn
            }
          >
            Home
          </NavLink>
        </li>
        <li key="movies">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? styles.navBtn + ' ' + styles.navBtnActive
                : styles.navBtn
            }
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
