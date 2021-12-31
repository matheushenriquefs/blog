import React, { useState, useEffect } from "react";
import Link from "next/link";

import { PostListDate } from "../PostListDate";

export const PostListItem = ({ title, date, excerpt, link }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setIsLoading(false), []);

  return (
    <>
      <li
        className={`list-group-item ${isLoading ? "placeholder-glow" : ""}`}
        aria-hidden={isLoading ? true : false}
      >
        <p className={`fs-4 fw-bold mb-0 ${isLoading ? "placeholder" : ""}`}>
          {title}
        </p>
        <p className={`mb-0 theme-excerpt ${isLoading ? "placeholder" : ""}`}>
          {excerpt}
        </p>
        <PostListDate date={date} className="d-block mb-3" />
        <Link href={link}>
          <a
            className={`btn btn-primary fs-5 ${
              isLoading ? "disabled placeholder" : ""
            }`}
          >
            Read more
          </a>
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
};
