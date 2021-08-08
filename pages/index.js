import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from '../components/Post';

export default function Home({ posts }) {
  return (
    <>
      <div className='posts my-5'>
        {posts.map((post, index)=>(
            <Post key={index} post={post}/>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);
    return { slug ,data};
  });

  function sortByDate (a, b){
    return new Date(b.data.date) - new Date(a.data.date);
  }

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
