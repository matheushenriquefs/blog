import Head from "next/head";
import Image from "next/image";
import { PostList } from "../src/components/PostList";
import PostService from "../src/services/PostService";
import PostRepository from "../src/repositories/PostRepository";

export default function Home({ posts }) {
  return <PostList posts={posts} />;
}

export async function getStaticProps() {
  const postRepository = new PostRepository();
  const postService = new PostService(postRepository);

  return {
    props: {
      posts: await Promise.all(await postService.index()),
    },
  };
}
