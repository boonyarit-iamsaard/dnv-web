import { type FC, type PropsWithChildren } from 'react';
import LayoutFooter from './LayoutFooter';
import LayoutHeader from './LayoutHeader';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <LayoutHeader />
      <main className="min-h-screen">{children}</main>
      <LayoutFooter />
    </>
  );
};

export default Layout;
