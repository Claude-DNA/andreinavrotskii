import Image from "next/image";

type Props = { image: string; alt: string; caption: string; width?: number; height?: number };

export default function ProjectFigure({ image, alt, caption, width = 1280, height = 720 }: Props) {
  const src = "/projects/" + image + ".webp";
  return (
    <figure className="my-6">
      <a href={src} aria-label={"Open full-size image: " + alt}>
        <Image src={src} width={width} height={height} sizes="(max-width: 768px) 100vw, 720px" alt={alt} className="h-auto w-full rounded-lg" />
      </a>
      <figcaption className="mt-2 text-sm leading-relaxed text-warm-200/80">{caption}</figcaption>
    </figure>
  );
}
