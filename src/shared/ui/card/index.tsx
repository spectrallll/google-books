import { HTMLAttributes, ReactNode } from "react";
import styles from "./style.module.scss";
import { classNames } from "@/shared/lib/class-names";

export enum CardTheme {
  NORMAL = "normal",
  OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  fullWidth?: boolean;
}

export const Card = (props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    fullWidth,
    ...othersProps
  } = props;

  return (
    <div
      className={classNames(styles.Card, { [styles.fullWidth]: fullWidth }, [
        className,
        styles[theme],
      ])}
      {...othersProps}
    >
      {children}
    </div>
  );
};
