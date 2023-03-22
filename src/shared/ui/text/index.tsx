import styles from "./style.module.scss";
import { classNames } from "@/shared/lib/class-names";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TextSize {
  S = "size_s",
  M = "size_m",
  L = "size_l",
}

type HeaderTag = "h1" | "h2" | "h3";
interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  textClassName?: string;
  titleClassName?: string;
  textTag?: "p" | "span";
  headerTag?: HeaderTag | "span";
  "data-testid"?: string;
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
  [TextSize.S]: "h3",
  [TextSize.M]: "h2",
  [TextSize.L]: "h1",
};

export const Text =
  ({
     className,
     title,
     text,
     theme = TextTheme.PRIMARY,
     align = TextAlign.LEFT,
     size = TextSize.M,
     textClassName,
     titleClassName,
     textTag,
     headerTag,
     "data-testid": dataTestId = "Text",
   }: TextProps) => {

    const HeaderTag = headerTag ? headerTag : mapSizeToHeaderTag[size];
    const TextTag = textTag || "p";

    return (
      <div
        className={classNames(styles.Text, {}, [
          className,
          styles[theme],
          styles[align],
          styles[size],
        ])}
      >
        {title && (
          <HeaderTag
            className={classNames(styles.title, {}, [titleClassName])}
            data-testid={`${dataTestId}.Header`}
          >
            {title}
          </HeaderTag>
        )}
        {text && (
          <TextTag className={classNames(styles.text, {}, [textClassName])} data-testid={`${dataTestId}.Paragraph`}>
            {text}
          </TextTag>
        )}
      </div>
    );
}