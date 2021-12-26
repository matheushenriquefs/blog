import React from 'react';
import ReactMarkdown from 'react-markdown';

import PostService from '../../src/services/PostService';
import PostRepository from '../../src/repositories/PostRepository';
import MarkdownComponentsEntity from '../../src/entities/MarkdownComponentsEntity';

export default function Post({ post }) {
    return (
        <>
            <h1 className="fw-bold">{post.title}</h1>
            <h2 className="fs-4 mb-5 theme-excerpt">{post.excerpt}</h2>
            <section>
                <ReactMarkdown children={post.body} components={MarkdownComponentsEntity} />
            </section>
        </>
    )

}

export async function getStaticProps({ params }) {
    const postRepository = new PostRepository();
    const postService = new PostService(postRepository);
  
    return {
        props: {
            post: await postService.get(params.slug),
        }
    }
}

export async function getStaticPaths() {
    const postRepository = new PostRepository();
    const postService = new PostService(postRepository);

    const posts = await Promise.all(await postService.index());

    return {
        fallback: false,
        paths: posts.map(post => ({
            params: {
                slug: post.slug,
            },
        })),
    }
}
