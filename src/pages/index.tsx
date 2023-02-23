import { type NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="min-h-screen">
      <section className="grid h-screen place-items-center">
        <div className="max-w-screen-sm space-y-4 text-center">
          <p className="italic text-slate-500">Welcome to</p>
          <h1 className="font-serif text-4xl uppercase text-slate-700">
            Dragonfly Naturist Village
          </h1>
          <hr className="border-slate-200" />
          {/* TODO: Improve this text */}
          <p className="italic text-slate-500">
            We are a naturist community in the beautiful countryside of the
            Pattaya area of Thailand.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
