import path from "path";

import matter from "gray-matter";

export default class PostService {
  constructor(IPostRepository) {
    this.IPostRepository = IPostRepository;
  }

  async index() {
    const directory = path.join(process.cwd(), "_posts");
    const filenames = await this.IPostRepository.readDir(directory);

    return filenames.map(async (filename) => {
      const file = await this.IPostRepository.readFile(
        path.join(process.cwd(), "_posts", filename),
        "utf8"
      );
      const { data } = matter(file);
      const slug = filename.replace(/\.mdx$/, "");

      return {
        ...data,
        slug,
        permalink: `/posts/${slug}`,
      };
    });
  }

  async get(slug) {
    const file = await this.IPostRepository.readFile(
      path.join(process.cwd(), "_posts", `${slug}.mdx`),
      "utf8"
    );

    const { content, data } = matter(file);

    return {
      ...data,
      body: content,
    };
  }
}
