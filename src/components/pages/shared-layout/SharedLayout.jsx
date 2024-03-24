import { Outlet } from 'react-router-dom';
import './SharedLayout.module.css';
import NavMenu from '../common/components/nav-menu/NavMenu';
import { Suspense } from 'react';
import Loader from '../common/components/loader/Loader';

const SharedLayout = () => {
  return (
    <main>
      <NavMenu />
      <section>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};

export default SharedLayout;
