import {
  ChangeEvent,
  InputHTMLAttributes,
  MutableRefObject,
  useEffect,
  useRef,
} from "react";
import { classNames, Mods } from "@/shared/lib/class-names";
import styles from "./styles.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "readonly" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  before?: string;
}

export const Input = (props: InputProps) => {
  const {
    className,
    before,
    value,
    onChange,
    type = "text",
    autofocus,
    readonly,
    ...restProps
  } = props;

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      inputRef.current.focus();
    }
  }, [autofocus]);

  const mods: Mods = {
    [styles.readonly]: readonly,
  };

  return (
    <div className={classNames(styles.InputWrapper, mods, [className])}>
      {before && (
        <div className={styles.placeholder}>{`${before}:`}</div>
      )}
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={styles.Input}
        readOnly={readonly}
        {...restProps}
      />
    </div>
  );
};
