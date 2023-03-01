import { type FC } from 'react';

import { Anchor, createStyles } from '@mantine/core';
import Link from 'next/link';

const layoutHeaderStyles = createStyles(theme => ({
  header: {
    position: 'fixed',
    display: 'flex',
    width: '100%',
    height: '4rem',
    alignItems: 'center',
    backgroundColor: `${theme.colors.dark[9]}f2`,
    '@supports (backdrop-filter: blur(8px))': {
      backdropFilter: 'blur(8px)',
    },
    zIndex: 10,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: theme.breakpoints.xl,
    paddingInline: theme.spacing.md,
    marginInline: 'auto',
  },
  logo: {
    color: theme.colors.slate[2],
    fontWeight: 700,
    fontFamily: theme.headings.fontFamily,
  },
}));

const LayoutHeader: FC = () => {
  const { classes } = layoutHeaderStyles();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link href="/" passHref legacyBehavior>
          <Anchor className={classes.logo} underline={false}>
            DNV
          </Anchor>
        </Link>
      </div>
    </header>
  );
};

export default LayoutHeader;
