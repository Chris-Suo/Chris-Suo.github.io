import Link from "next/link";
import style from "../components/Post.module.css";

export default function Post({ post }) {
  return (
    <>
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{post.data.title}</h5>
          <h6 className={`${style.subtitle} card-subtitle text-end`}>
            {post.data.date}
            {post.data.tags.map((tag, index) => (
              <span key={index} className="badge bg-success text-dark mx-1">
                {tag}
              </span>
            ))}
          </h6>

          <p className="card-text">card text</p>
          <Link href={`/posts/${post.slug}`}>
            <a className="btn btn-dark">Read More</a>
          </Link>
        </div>
      </div>
    </>
  );
}
