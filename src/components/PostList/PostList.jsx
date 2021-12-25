import React from 'react';

import { PostListItem } from '../PostListItem';

export const PostList = ({ posts }) => (
    <section>
        <ul className="list-group">
            {posts.map((post) => (
                    <PostListItem key={post.slug} title={post.title} date={post.createdAt} excerpt={post.excerpt} link={post.permalink} />
                )
            )}
        </ul>
        <style jsx>{`
            .list-group {
                list-style: none;
                padding-left: 0;
            }
        `}</style>
    </section>
);
