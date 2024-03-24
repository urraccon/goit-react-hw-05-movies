import { Outlet } from 'react-router-dom';
import './SharedLayout.module.css';
import NavMenu from '../common/components/nav-menu/NavMenu';

const SharedLayout = () => {
  return (
    <main>
      <NavMenu />
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default SharedLayout;
