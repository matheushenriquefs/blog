import { StringDecoder } from "string_decoder";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import PostService from "../../src/services/PostService";
import PostRepository from "../../src/repositories/PostRepository";
import StringDecoderHelper from "../../src/helpers/StringDecoderHelper";
import MarkdownComponentsEntity from "../../src/entities/MarkdownComponentsEntity";

export default function Post({ post }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setIsLoading(false), []);

  return (
    <section
      className={isLoading ? "placeholder-glow" : ""}
      aria-hidden={isLoading ? true : false}
    >
      <h1 className={`fw-bold ${isLoading ? "placeholder" : ""}`}>
        {post.title}
      </h1>
      <h2
        className={`fs-4 mb-5 theme-excerpt ${isLoading ? "placeholder" : ""}`}
      >
        {post.excerpt}
      </h2>
      <article>
        {isLoading ? (
          <span className="placeholder">...</span>
        ) : (
          <ReactMarkdown components={MarkdownComponentsEntity}>
            {post.body}
          </ReactMarkdown>
        )}
      </article>
    </section>
  );
}

export async function getStaticProps({ params }) {
  const stringDecoderHelper = new StringDecoderHelper(new StringDecoder("utf8"));
  const postRepository = new PostRepository();
  const postService = new PostService(postRepository, stringDecoderHelper);

  return {
    props: {
      post: await postService.get(params.slug),
    },
  };
}

export async function getStaticPaths() {
  const stringDecoderHelper = new StringDecoderHelper(new StringDecoder("utf8"));
  const postRepository = new PostRepository();
  const postService = new PostService(postRepository, stringDecoderHelper);

  const posts = await Promise.all(await postService.index());

  return {
    fallback: false,
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
}
