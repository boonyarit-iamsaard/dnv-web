import { type NextPage } from 'next';

import { SectionHero, SectionIntroduction } from '@/components/sections';

const Home: NextPage = () => {
  return (
    <>
      <SectionHero />
      <SectionIntroduction />
    </>
  );
};

export default Home;
