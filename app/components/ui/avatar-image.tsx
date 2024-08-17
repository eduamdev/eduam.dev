import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export function AvatarImage({
  src,
  alt,
  priority = false,
}: {
  src: string | StaticImport;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={32}
      height={32}
      priority={priority}
      className="aspect-square size-8 shrink-0 rounded-full"
    />
  );
}
