import { type FC } from 'react';

import { Anchor, createStyles, Text } from '@mantine/core';
import Link from 'next/link';

const layoutFooterStyles = createStyles(theme => ({
  footer: {
    display: 'flex',
    height: '4rem',
    alignItems: 'center',
    backgroundColor: theme.colors.dark[9],
  },
  container: {
    width: '100%',
    maxWidth: theme.breakpoints.xl,
    paddingInline: theme.spacing.md,
    marginInline: 'auto',
  },
  link: {
    color: theme.colors.slate[4],
    '&:hover': {
      color: theme.colors.slate[2],
    },
  },
}));

const LayoutFooter: FC = () => {
  const { classes } = layoutFooterStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Text ta="center" fz="sm" color="slate.5">
          &#64; 2021 Dragonfly Naturist Village. All rights reserved.
        </Text>
        <Text ta="center" fz="sm" color="slate.5">
          Made with ❤️ by{' '}
          <Link
            href="https://github.com/boonyarit-iamsaard"
            target="_blank"
            passHref
            legacyBehavior
          >
            <Anchor className={classes.link} underline={false}>
              Boonyarit Iamsa-ard
            </Anchor>
          </Link>
        </Text>
      </div>
    </footer>
  );
};

export default LayoutFooter;
