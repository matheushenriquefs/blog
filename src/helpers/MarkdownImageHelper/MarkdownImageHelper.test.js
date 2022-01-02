import MarkdownImageHelper from "./index";

test("getAlt should return a valid alt text", async () => {
  const markdownImageHelper = new MarkdownImageHelper();
  const mockedString = "NextJS Logo {priority}{128x128}";
  const result = markdownImageHelper.getAlt(mockedString);
  expect(result).toBe("NextJS Logo");
});

test("getAlt should not return alt text", async () => {
  const markdownImageHelper = new MarkdownImageHelper();
  const mockedString = "{priority}{128x128}";
  const result = markdownImageHelper.getAlt(mockedString);
  expect(result).toBe("");
});

test("getIsPriority should return true", async () => {
  const markdownImageHelper = new MarkdownImageHelper();
  const mockedString = "NextJS Logo {priority}{128x128}";
  const result = markdownImageHelper.getIsPriority(mockedString);
  expect(result).toBe(true);
});

test("getIsPriority should return false", async () => {
  const markdownImageHelper = new MarkdownImageHelper();
  const mockedString = "NextJS Logo {128x128}";
  const result = markdownImageHelper.getIsPriority(mockedString);
  expect(result).toBe(false);
});

test("getImgDimensions should return width and height", async () => {
  const markdownImageHelper = new MarkdownImageHelper();
  const mockedString = "NextJS Logo {128x128}";
  const result = markdownImageHelper.getImgDimensions(mockedString);
  expect(result).toEqual({
    width: "128",
    height: "128",
  });
});

test("getImgDimensions should return null", async () => {
  const markdownImageHelper = new MarkdownImageHelper();
  const mockedString = "NextJS Logo";
  const result = markdownImageHelper.getImgDimensions(mockedString);
  expect(result).toBe(null);
});

test("getWidth should return width", async () => {
  const markdownImageHelper = new MarkdownImageHelper();
  const mockedString = "128x256";
  const result = markdownImageHelper.getWidth(mockedString);
  expect(result).toBe("128");
});

test("getWidth should not return width", async () => {
  const markdownImageHelper = new MarkdownImageHelper();
  const mockedString = "NextJS Logo";
  const result = markdownImageHelper.getWidth(mockedString);
  expect(result).toBe("Ne");
});

test("getHeight should return height", async () => {
  const markdownImageHelper = new MarkdownImageHelper();
  const mockedString = "128x256";
  const result = markdownImageHelper.getHeight(mockedString);
  expect(result).toBe("256");
});

test("getHeight should not return height", async () => {
  const markdownImageHelper = new MarkdownImageHelper();
  const mockedString = "NextJS Logo";
  const result = markdownImageHelper.getHeight(mockedString);
  expect(result).toBe("tJS Logo");
});

test("getMetaWidthMetaHeight should return metadata", async () => {
  const markdownImageHelper = new MarkdownImageHelper();
  const mockedString = "NextJS Logo {128x128}";
  const result = markdownImageHelper.getMetaWidthMetaHeight(mockedString);
  expect(result).toBe("128x128");
});

test("getMetaWidthMetaHeight should not return metadata", async () => {
  const markdownImageHelper = new MarkdownImageHelper();
  const mockedString = "NextJS Logo";
  const result = markdownImageHelper.getMetaWidthMetaHeight(mockedString);
  expect(result).toBe("");
});
