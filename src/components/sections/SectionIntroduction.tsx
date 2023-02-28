import { type FC } from 'react';

import { createStyles, Stack, Title } from '@mantine/core';

const sectionHeroStyles = createStyles(theme => ({
  section: {
    display: 'grid',
    placeItems: 'center',
    minHeight: '100vh',
  },
  container: {
    width: '100%',
    maxWidth: theme.breakpoints.lg,
    paddingInline: theme.spacing.md,
    marginInline: 'auto',
    textAlign: 'center',
  },
}));

const SectionHero: FC = () => {
  const { classes } = sectionHeroStyles();

  return (
    <section className={classes.section}>
      <Stack className={classes.container}>
        <Title order={2} tt="uppercase">
          Introduction
        </Title>
      </Stack>
    </section>
  );
};

export default SectionHero;
