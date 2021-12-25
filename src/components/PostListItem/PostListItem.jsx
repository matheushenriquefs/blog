import React from 'react';
import Link from 'next/link';

import { PostListDate } from '../PostListDate';

export const PostListItem = ({ title, date, excerpt, link }) => (
    <>
        <li className="list-group-item">
            <p className="fs-4 fw-bold mb-0">{title}</p>
            <p className="mb-0 theme-excerpt">{excerpt}</p>
            <PostListDate date={date} className="d-block mb-3" />
            <Link href={link}>
                <a className="btn btn-primary fs-5">Read more</a>
            </Link>
        </li>
        <style jsx>{`
            .list-group-item {
                padding: 1rem;
            }
            .list-group-item:not(.list-group-item:last-child) {
                margin-bottom: 1rem;
            }
        `}</style>
    </>
);
