import Link from "next/link";

import getPosts from "../lib/posts";

const Blog = ({ posts }) => {
  return (
    <>
      <h1 className="font-black">Posts</h1>
      <ul className="border-solid border-gray-500 border-l">
        {posts.map(({ slug, title }) => (
          <li key={slug} className="list-none">
            <Link href={`/${slug}`} legacyBehavior>
              <a className="no-underline font-black text-gray-400 hover:text-white ">
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts(),
    },
  };
}

export default Blog;
