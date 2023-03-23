import React from "react";
import { BookCategoryField, bookModelActions, getBookCategoryField } from "@/entities/book";
import styles from "./styles.module.scss";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/class-names";
import { Select } from "@/shared/ui/select";

interface BookCategorySort {
  className?: string;
  labelClassName?: string;
}

const categoryOptions = [
  {
    value: BookCategoryField.ALL,
    content: "all"
  },
  {
    value: BookCategoryField.ART,
    content: "art"
  },
  {
    value: BookCategoryField.BIOGRAPHY,
    content: "biography"
  },
  {
    value: BookCategoryField.HISTORY,
    content: "history"
  },
  {
    value: BookCategoryField.MEDICAL,
    content: "medical"
  },
  {
    value: BookCategoryField.COMPUTERS,
    content: "computers"
  },
  {
    value: BookCategoryField.POETRY,
    content: "poetry"
  }
]

export const BookCategorySort = (props: BookCategorySort) => {
  const { className, labelClassName } = props;
  const dispatch = useAppDispatch();

  const categoryField = useSelector(getBookCategoryField);
  const onChange = (value: BookCategoryField) => {
    dispatch(bookModelActions.setCategoryField(value))
  }

  return (
    <Select
      dataTestId={"CategorySort.Select"}
      className={className}
      onChange={onChange}
      value={categoryField}
      label={"Categories"}
      labelClassName={classNames(styles.label, {}, [labelClassName])}
      options={categoryOptions}
    />
  );
};
