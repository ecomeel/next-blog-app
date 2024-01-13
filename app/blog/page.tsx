"use client";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

import Posts from "@/components/Posts";
import { getPosts } from "@/lib/services";
import { PostSearch } from "@/components/PostSearch";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container">
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {isLoading ? <h3>Loading ...</h3> : <Posts posts={posts} />}
    </div>
  );
}
