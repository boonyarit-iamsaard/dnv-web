import { type FC, type PropsWithChildren } from 'react';

import { createStyles } from '@mantine/core';

import LayoutFooter from './LayoutFooter';
import LayoutHeader from './LayoutHeader';

const layoutStyles = createStyles(() => ({
  main: {
    minHeight: '100vh',
  },
}));

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { classes } = layoutStyles();

  return (
    <>
      <LayoutHeader />
      <main className={classes.main}>{children}</main>
      <LayoutFooter />
    </>
  );
};

export default Layout;
