import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ThemeSwitcher } from "../ThemeSwitcher";
import { useUserSettingsContext } from "../../contexts/UserSettings";
import GithubIcon from "../../../public/icons/github.svg";

export const Navbar = () => {
  const { settings } = useUserSettingsContext();

  return (
    <>
      <nav
        className={`navbar sticky-top navbar-expand-lg ${
          settings.theme.dark ? "navbar-dark" : "navbar-light"
        }`}
      >
        <div className="container-fluid">
          <Link href="/">
            <a className="d-flex navbar-brand pb-0 pt-0">
              <Image
                src="/icons/codesandbox.svg"
                alt="Codesandbox icon"
                width="32"
                height="32"
              />
            </a>
          </Link>
          <section className="flex-row navbar-nav">
            <a className="nav-link" href="#">
              <GithubIcon className="theme-icon" />
            </a>
            <a className="nav-link">
              <ThemeSwitcher />
            </a>
          </section>
        </div>
      </nav>
    </>
  );
};
