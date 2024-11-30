'use client';
import React from 'react';
import Link from 'next/link';
import s from './Navbar.module.css';
import Logo from '../../icons/Logo';


interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {

  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">

      <div className="flex items-center flex-1 ">
      <Link href="/" className={s.logo} aria-label="Logo">
          <Logo />
        </Link>
        <nav className="ml-6 space-x-2 lg:block">
          <Link href="/" className={s.link}>
            Home
          </Link>
          <Link href="/free-apis" className={s.link}>
            Free
          </Link>
          <Link href="/paid-apis" className={s.link}>
            Paid
          </Link>
          <Link href="/docs" className={s.link}>
            Docs
          </Link>
          <Link href="/pricing" className={s.link}>
            Pricing
          </Link>
          {user && (
            <Link href="/account" className={s.link}>
              Account
            </Link>
          )}
        </nav>

      </div>
      <div className="flex justify-end space-x-8">
        {user ? (
          <form >
            <input type="hidden" name="pathName" />
            <button type="submit" className={s.link}>
              Sign out
            </button>
          </form>
        ) : (
          <Link href="/signin" className={s.link}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}