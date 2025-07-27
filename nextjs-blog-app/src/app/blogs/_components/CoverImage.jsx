import Image from "next/image";
import Link from "next/link";

function CoverImage({ title, coverImageUrl, slug }) {
  console.log(coverImageUrl);
  return (
    <div className="relative w-full min-h-[200px] aspect-video overflow-hidden rounded-md mb-6">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 21vw"
          className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
          quality={90}
        />
      </Link>
    </div>
  );
}
export default CoverImage;
