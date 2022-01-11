import { StringDecoder } from "string_decoder";

import { PostList } from "../src/components/PostList";
import PostService from "../src/services/PostService";
import PostRepository from "../src/repositories/PostRepository";
import StringDecoderHelper from "../src/helpers/StringDecoderHelper";

export default function Home({ posts }) {
  return <PostList posts={posts} />;
}

export async function getStaticProps() {
  const stringDecoderHelper = new StringDecoderHelper(new StringDecoder("utf8"));
  const postRepository = new PostRepository();
  const postService = new PostService(postRepository, stringDecoderHelper);

  return {
    props: {
      posts: await Promise.all(await postService.index()),
    },
  };
}
