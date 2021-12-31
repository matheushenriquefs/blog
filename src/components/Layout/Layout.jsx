import React from "react";

import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="container py-5">{children}</main>
    <Footer />
  </>
);
