import { CSSProperties, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";

export type TextVariantProps = VariantProps<typeof textVariants>;
export const textVariants = cva("text-inherit", {
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    transform: {
      capitalize: "capitalize",
      uppercase: "uppercase",
      lowercase: "lowercase",
      initial: "normal-case",
    },
    monospace: {
      true: "font-mono",
    },
    wrap: {
      true: "whitespace-normal",
      false: "whitespace-nowrap",
    },
    balanced: {
      true: "w-full",
    },
  },
  defaultVariants: { wrap: true, monospace: false },
});

enum AsEnum {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  div = "div",
  blockquote = "blockquote",
  dt = "dt",
  dd = "dd",
  legend = "legend",
  p = "p",
  q = "q",
  small = "small",
  span = "span",
  strong = "strong",
  label = "label",
}

interface TextProps extends TextVariantProps {
  children: ReactNode;
  as?: keyof typeof AsEnum;
  className?: string;
  style?: CSSProperties;
  title?: string;
  monospace?: boolean;
  id?: string;
  dangerouslySetInnerHTML?: { __html: string };
  htmlFor?: string;
}

export function Text({
  children,
  as = AsEnum.p,
  align,
  transform,
  className,
  style,
  title,
  monospace,
  wrap,
  balanced,
  id,
  dangerouslySetInnerHTML,
  htmlFor,
}: TextProps) {
  const TextComponent: keyof typeof AsEnum = as;

  const classNames = cn(
    textVariants({
      align,
      transform,
      monospace,
      wrap,
      balanced,
    }),
    className,
  );

  if (as === AsEnum.label) {
    return (
      <TextComponent
        id={id}
        className={classNames}
        style={style}
        title={title}
        htmlFor={htmlFor}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      >
        {balanced ? <Balancer>{children}</Balancer> : children}
      </TextComponent>
    );
  }

  return (
    <TextComponent
      id={id}
      className={classNames}
      style={style}
      title={title}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {balanced ? <Balancer>{children}</Balancer> : children}
    </TextComponent>
  );
}
