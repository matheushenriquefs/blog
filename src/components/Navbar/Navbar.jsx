import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ThemeSwitcher } from "../ThemeSwitcher";
import GithubIcon from "../../../public/icons/github.svg";

export const Navbar = () => (
  <>
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="container-fluid">
        <Link href="/">
          <a className="d-flex navbar-brand pb-0 pt-0">
            <Image
              src="/favicon.ico"
              alt="Vercel's logo"
              width="24"
              height="24"
            />
          </a>
        </Link>
        <section className="flex-row navbar-nav">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Pricing</a>
                    <a className="nav-link disabled">Disabled</a> */}
          <a className="nav-link" href="#">
            <GithubIcon className="theme-icon" />
          </a>
          <a className="nav-link">
            <ThemeSwitcher />
          </a>
        </section>
      </div>
    </nav>
    <style jsx>{`
      .navbar {
        height: 3.5rem;
      }

      .nav-link {
        height: 1.5rem;
      }

      .nav-link:not(.nav-link:last-child) {
        margin-right: 1rem;
      }
    `}</style>
  </>
);
