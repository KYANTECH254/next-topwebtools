import s from './Navbar.module.css';
import React from 'react';
import Navlinks from './NavBarLinks';
import Link from 'next/link';

export default async function Navbar() {
  const user = {} as any;
  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className={`max-w-6xl px-6 mx-auto`}>
        <Navlinks user={user} />
      </div>
    </nav>
  );
}