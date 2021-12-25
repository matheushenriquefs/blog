import path from 'path';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }

    async index() {
        const directory = path.join(process.cwd(), '_posts');
        const filenames = await this.postRepository.readDir(directory);

        return filenames.map(async (filename) => {
            const file = await this.postRepository.readFile(path.join(process.cwd(), '_posts', filename), 'utf8');
            const { data } = matter(file);
            const slug = filename.replace(/\.mdx$/, '');

            return {
                ...data,
                slug,
                permalink: `/posts/${slug}`,
            };
        });
    }

    async get(slug) {
        const file = await this.postRepository.readFile(path.join(process.cwd(), '_posts', `${slug}.mdx`), 'utf8');

        const {
            content,
            data,
        } = matter(file);
    
        const body = remark().use(html).processSync(content).toString();
    
        return {
          ...data,
          body,
        };
    }
}
