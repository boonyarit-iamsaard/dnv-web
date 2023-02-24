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
    backgroundColor: 'hsla(0, 0%, 100%, 0.95)',
    borderBottom: `1px solid ${theme.colors.slate[2]}`,
    '@supports (backdrop-filter: blur(8px))': {
      backdropFilter: 'blur(8px)',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: theme.breakpoints.xl,
    paddingInline: theme.spacing.md,
    marginInline: 'auto',
  },
}));

const LayoutHeader: FC = () => {
  const { classes } = layoutHeaderStyles();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link href="/" passHref legacyBehavior>
          <Anchor color="slate.5" underline={false}>
            DNV
          </Anchor>
        </Link>
      </div>
    </header>
  );
};

export default LayoutHeader;
