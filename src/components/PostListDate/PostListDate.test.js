import "../../../__mocks__/matchMediaMock";
import { render } from "../../utils/test";
import { toBeInTheDocument, toHaveAttribute } from "@testing-library/jest-dom";
import { PostListDate } from "./PostListDate";

beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date(2021, 11, 31));
});

afterAll(() => {
  jest.useRealTimers();
});

test("loads and display component", async () => {
  const { container } = render(<PostListDate date="12-31-2021" />);
  const root = container.firstChild;
  const date = container.querySelector('[datetime="Dec 31"]');

  expect(root).toBeInTheDocument();
  expect(date).toBeInTheDocument();
  expect(date).toHaveAttribute("datetime", "Dec 31");
});
