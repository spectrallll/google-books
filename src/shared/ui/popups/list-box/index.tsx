import { Fragment, ReactNode } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import { classNames } from "@/shared/lib/class-names";
import { DropdownDirection } from "@/shared/types/ui";
import { Button } from "@/shared/ui/button";
import { HStack } from "@/shared/ui/stack";
import styles from "./styles.module.scss";
import { mapDirectionClass } from "../styles/consts";
import popupStyles from "../styles/Popup.module.scss";

export interface ListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  items?: ListBoxItem<T>[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
  labelClassName?: string;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    labelClassName,
    direction = "bottom right",
    label,
  } = props;

  return (
    <HStack gap="4" data-testid={"ListBox"}>
      {label && (
        <span
          className={classNames("", { [popupStyles.disabled]: readonly }, [labelClassName])}
        >
          {`${label}:`}
        </span>
      )}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(
          styles.ListBox,
          { [popupStyles.disabled]: readonly },
          [className, popupStyles.popup],
        )}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button as={"div"} className={styles.trigger}>
          <Button data-testid={"ListBox.Button"} className={styles.button} disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options
          data-testid={"ListBox.Options"}
          className={classNames(styles.options, {}, [
            mapDirectionClass[direction],
          ])}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.disabled}
            >
              {({ active, selected, disabled }) => (
                <li
                  className={classNames(
                    styles.item,
                    {
                      [popupStyles.active]: active,
                      [popupStyles.disabled]: disabled,
                    },
                    [],
                  )}
                >
                  {selected && ">"}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};