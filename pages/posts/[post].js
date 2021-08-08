import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import marked from "marked";
import style from "./[post].module.css";

export default function Post({ data, content }) {
  return (
    <>
      <Head>
        <title>Chris Complete - {data.title}</title>
      </Head>
      <div className="my-5">
        <div className={`${style.postBody} p-5 row`}>
          <div className="col-10"
            dangerouslySetInnerHTML={{ __html: marked(content) }}>
          </div>
          
          <div className="col-2">
            {data.date}
            <br/>
            {data.tags.map((tag, index) => (
              <>
                <span key={index} className="badge bg-success text-dark mx-1">
                  {tag}
                </span>
                <br/>
              </>
            ))}
          </div>         
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      post: filename.replace(".md", ""),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { post } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", post + ".md"),
    "utf-8"
  );
  const { data, content } = matter(markdownWithMeta);

  return {
    props: {
      data,
      content,
    },
  };
}
