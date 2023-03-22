import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";
import { classNames, Mods } from "@/shared/lib/class-names";

export enum ButtonTheme {
  PRIMARY = "primary",
  CLEAR = "clear",
  OUTLINE = "outline"
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    theme = ButtonTheme.PRIMARY,
    square,
    size = "",
    disabled,
    fullWidth,
    ...rest
  } = props;

  const mods: Mods = {
    [styles.square]: square,
    [styles.disabled]: disabled,
    [styles.fullWidth]: fullWidth,
  };

  return (
    <button
      className={classNames(styles.Button, mods, [
        className,
        styles[theme],
        styles[size],
      ])}
      type="button"
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
