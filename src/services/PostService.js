import path from "path";

import matter from "gray-matter";

export default class PostService {
  constructor(IPostRepository, IStringDecoderHelper) {
    this.IPostRepository = IPostRepository;
    this.IStringDecoderHelper = IStringDecoderHelper;
  }

  async index() {
    const directory = path.join(process.cwd(), "_posts");
    const filenames = await this.IPostRepository.readDir(directory);

    return filenames.map(async (filename) => {
      const stream = this.IPostRepository.createReadStream(
        path.join(process.cwd(), "_posts", filename)
      );

      const file = await this.IStringDecoderHelper.streamToString(stream);

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
    const stream = await this.IPostRepository.createReadStream(
      path.join(process.cwd(), "_posts", `${slug}.mdx`)
    );

    const file = await this.IStringDecoderHelper.streamToString(stream);

    const { content, data } = matter(file);

    return {
      ...data,
      body: content,
    };
  }
}
