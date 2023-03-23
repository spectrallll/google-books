import styles from "./styles.module.scss";
import { ChangeEvent } from "react";
import { classNames, Mods } from "@/shared/lib/class-names";

export interface SelectOption<T extends string> {
  content: string;
  value: T;
}
interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
  labelClassName?: string;
  dataTestId?: string;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, onChange, readonly } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T);
    }
  };

  const optionsList = options?.map((opt) => (
        <option className={styles.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
  ))


  const mods: Mods = {
    [styles.active]: readonly,
  };

  return (
    <div className={classNames(styles.Wrapper, mods, [className])}>
      {label && <span className={classNames(styles.label, {}, [props.labelClassName])}>{`${label}:`}</span>}
      <select
        data-testid={props.dataTestId}
        disabled={readonly}
        className={styles.Select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
};