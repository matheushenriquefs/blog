import "../../../__mocks__/matchMediaMock";
import { render, screen } from "../../utils/test";
import {
  toBeInTheDocument,
  toHaveTextContent,
  toHaveAttribute,
} from "@testing-library/jest-dom";
import { PostListItem } from "./PostListItem";

test("loads and display component", async () => {
  const { container } = render(
    <PostListItem
      title="title"
      date="12-31-2021"
      excerpt="excerpt"
      link="/posts/hello-world"
    />
  );
  const root = container.firstChild;

  const title = screen.getByText(/title/i);
  const excerpt = screen.getByText(/excerpt/i);
  const date = container.querySelector('[datetime="Dec 31"]');
  const link = screen.getByRole("link");

  expect(root).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(excerpt).toBeInTheDocument();
  expect(date).toBeInTheDocument();
  expect(link).toBeInTheDocument();

  expect(title).toHaveTextContent("title");
  expect(excerpt).toHaveTextContent("excerpt");
  expect(date).toHaveTextContent("Dec 31");
  expect(link).toHaveAttribute("href", "/posts/hello-world");
});
