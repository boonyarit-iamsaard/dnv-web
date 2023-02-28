import { type FC } from 'react';

import { createStyles, Divider, Stack, Text, Title } from '@mantine/core';

const sectionHeroStyles = createStyles(theme => ({
  section: {
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
  },
  container: {
    maxWidth: theme.breakpoints.sm,
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
        <Text color="slate.5" fs="italic">
          Welcome to
        </Text>
        <Title color="slate.7" tt="uppercase">
          Dragonfly Naturist Village
        </Title>
        <Divider color="slate.2" />
        {/* TODO: Improve this text */}
        <Text color="slate.5" fz="sm" fs="italic">
          &quot;We are a naturist community in the beautiful countryside of the
          Pattaya area of Thailand.&quot;
        </Text>
      </Stack>
    </section>
  );
};

export default SectionHero;
