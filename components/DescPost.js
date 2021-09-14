import PostMetaTitle from "./PostMetaTitle";
import PostAuthor from "./PostAuthor";
export default function DescPost({
  category,
  date,
  title,
  shortDesc,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <>
      <PostMetaTitle category={category} title={title} date={date} />
      <p className="text-white/60 mt-5 w-10/12">{shortDesc}</p>
      <PostAuthor
        authorName={authorName}
        authorJob={authorJob}
        authorAvatar={authorAvatar}
      />
    </>
  );
}
