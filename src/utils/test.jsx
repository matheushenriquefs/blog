import React from "react";
import { render } from "@testing-library/react";
import { UserSettings } from "../contexts/UserSettings";

const Providers = ({ children }) => {
  return <UserSettings>{children}</UserSettings>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
