import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image, { ImageProps } from "next/image";

import { cn } from "@/lib/utils";

export interface ResponsiveImageProps extends ImageProps {
  ratio?: number;
  rounded?: boolean;
  bordered?: boolean;
}

export function ResponsiveImage({
  ratio = 16 / 9,
  className,
  alt,
  width,
  height,
  rounded = true,
  priority = false,
  bordered = true,
  ...props
}: ResponsiveImageProps) {
  return (
    <div
      style={{ width: width }}
      className={cn(
        "max-w-full overflow-hidden",
        rounded && "rounded-xl",
        bordered && "border border-neutral-200 dark:border-neutral-700/80",
      )}
    >
      <AspectRatio ratio={ratio}>
        <Image
          alt={alt}
          fill
          className={cn("object-cover", className)}
          priority={priority}
          {...props}
        />
      </AspectRatio>
    </div>
  );
}
