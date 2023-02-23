import { type FC } from 'react';

const LayoutFooter: FC = () => {
  return (
    <footer className="flex h-16 items-center bg-slate-900">
      <div className="container mx-auto max-w-screen-lg px-4">
        <p className="text-center text-sm text-slate-600">
          Created by{' '}
          <a
            href="https://github.com/boonyarit-iamsaard"
            target="_blank"
            className="hover:text-slate-400 hover:underline"
            rel="noreferrer"
          >
            Boonyarit Iamsaard
          </a>
        </p>
      </div>
    </footer>
  );
};

export default LayoutFooter;
