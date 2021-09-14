import DescPost from "./DescPost";
import Link from 'next/link'

export default function CardPost({ thumbnail, ...descPost }) {
  return (
    <article>
      <Link href="/detail">
      <a>
      <img src={thumbnail} className="w-full rounded" />
      <DescPost {...descPost} />
      </a>
      </Link>
    </article>
  );
}
