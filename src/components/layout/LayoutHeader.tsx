import Link from 'next/link';
import { type FC } from 'react';

const LayoutHeader: FC = () => {
  return (
    <header className="supports-backdrop-blur:bg-white/95 fixed flex h-16 w-full items-center border-b border-b-slate-200 bg-white backdrop-blur">
      <div className="container mx-auto flex max-w-screen-lg items-center px-4">
        <Link
          href="/"
          className="font-serif uppercase text-slate-700 hover:underline"
        >
          DNV
        </Link>
      </div>
    </header>
  );
};

export default LayoutHeader;
