import "../../../__mocks__/matchMediaMock";
import { render, fireEvent, screen } from "../../utils/test";
import { toBeInTheDocument, toHaveClass } from "@testing-library/jest-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";

test("loads and display component", async () => {
  const { container } = render(<ThemeSwitcher />);
  expect(container).toBeInTheDocument();
});

test("change theme", async () => {
  const { container } = render(<ThemeSwitcher />);
  const root = container.firstChild;

  fireEvent.click(root);

  expect(document.body).toHaveClass("dark-theme");

  fireEvent.click(root);

  expect(document.body).not.toHaveClass("dark-theme");
});

test("display right icons", async () => {
  const { container } = render(<ThemeSwitcher />);
  const root = container.firstChild;

  fireEvent.click(root);

  expect(screen.getByLabelText("sun-icon")).toBeInTheDocument();

  fireEvent.click(root);

  expect(screen.getByLabelText("moon-icon")).toBeInTheDocument();
});
