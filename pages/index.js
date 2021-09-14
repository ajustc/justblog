import Head from "next/head";
import Layout from "@components/Layout";
import Container from "./../components/Container";
import FeaturePost from "@components/FeaturePost";
import CardPost from "@components/CardPost";
import { useState } from "react";
import mockPosts from "../utils/posts.json";

export default function Home() {
  const [Posts, setPosts] = useState(mockPosts);
  return (
    <Layout>
      <Head>
        <title>Home &mdash; Justc</title>
      </Head>
      <Container>
        <FeaturePost />
        <div className="flex flex-wrap -mx-4 mt-6">
          {Posts.map((post) => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
