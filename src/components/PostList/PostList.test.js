import "../../../__mocks__/matchMediaMock";
import { render, screen } from "../../utils/test";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import { PostList } from "./PostList";

test("loads and display component", async () => {
  const mockedPosts = [
    {
      title: "Title for my first post",
      excerpt: "Excerpt for my first post",
      slug: "first-post",
      permalink: "/posts/first-post",
      createdAt: "12-31-2021",
    },
    {
      title: "Title for my second post",
      excerpt: "Excerpt for my second post",
      slug: "second-post",
      permalink: "/posts/second-post",
      createdAt: "12-31-2021",
    },
    {
      title: "Title for my third post",
      excerpt: "Excerpt for my third post",
      slug: "third-post",
      permalink: "/posts/third-post",
      createdAt: "12-31-2021",
    },
  ];

  const { container } = render(<PostList posts={mockedPosts} />);
  const root = container.firstChild;

  expect(root).toBeInTheDocument();
});
