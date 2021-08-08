import Link from "next/link";
import Style from "../components/Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={Style.header}>
        <Link href="/" passHref>
          <h1>$&gt; Chris Complete</h1>
        </Link>
        <div className="text-end fs-5">
          <Link href="/" passHref>
            <a className="mx-2">Posts</a>
          </Link>
          {/* <Link href="/about" passHref>
            <a className="mx-2">About</a>
          </Link> */}
        </div>
      </div>
    </header>
  );
}
