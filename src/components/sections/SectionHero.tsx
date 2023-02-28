import { useEffect, useState, type FC } from 'react';

import {
  createStyles,
  Divider,
  Stack,
  Text,
  Title,
  Transition,
} from '@mantine/core';

const sectionHeroStyles = createStyles(theme => ({
  section: {
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
    color: theme.colors.slate[5],
    background: `linear-gradient(to bottom, ${theme.colors.dark[9]}, ${theme.colors.slate[9]})`,
  },
  container: {
    maxWidth: theme.breakpoints.sm,
    paddingInline: theme.spacing.md,
    marginInline: 'auto',
    textAlign: 'center',
  },
}));

const translateY = {
  in: { opacity: 1, transform: 'translateY(0)' },
  out: { opacity: 0, transform: 'translateY(25%)' },
  common: { transformOrigin: 'center bottom' },
  transitionProperty: 'transform, opacity',
};

const SectionHero: FC = () => {
  const { classes } = sectionHeroStyles();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 1000);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <section className={classes.section}>
      <Transition
        mounted={mounted}
        transition={translateY}
        duration={1000}
        timingFunction="ease"
      >
        {styles => (
          <Stack className={classes.container} style={styles}>
            <Text fs="italic">Welcome to</Text>
            <Title color="slate.2" tt="uppercase">
              Dragonfly Naturist Village
            </Title>
            <Divider color="slate.5" />
            {/* TODO: Improve this text */}
            <Text fz="sm" fs="italic">
              &quot;We are a naturist community in the beautiful countryside of
              the Pattaya area of Thailand.&quot;
            </Text>
          </Stack>
        )}
      </Transition>
    </section>
  );
};

export default SectionHero;
