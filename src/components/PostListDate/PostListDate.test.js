import "../../../__mocks__/matchMediaMock";
import { render, screen } from "../../utils/test";
import { toBeInTheDocument, toHaveAttribute } from "@testing-library/jest-dom";
import { PostListDate } from "./PostListDate";

test("loads and display component", async () => {
  const { container } = render(<PostListDate date="12-31-2021" />);
  const root = container.firstChild;
  const date = screen.getByText(/dec 31/i);

  expect(root).toBeInTheDocument();
  expect(date).toHaveAttribute("datetime", "Dec 31");
});
