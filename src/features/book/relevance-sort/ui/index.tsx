import React from "react";
import { bookModelActions, BookSortField, getBookSort } from "@/entities/book";
import styles from "./styles.module.scss";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/class-names";
import { Select } from "@/shared/ui/select";

interface BookRelevanceSort {
  className?: string;
  labelClassName?: string;
}

const relevanceOptions = [
  {
    value: BookSortField.RELEVANCE,
    content: "relevance"
  },
  {
    value: BookSortField.NEWEST,
    content: "newest"
  }
]

export const BookRelevanceSort = (props: BookRelevanceSort) => {

  const dispatch = useAppDispatch();

  const sort = useSelector(getBookSort);

  const onChange = (value: BookSortField) => {
    dispatch(bookModelActions.setSort(value));
  }

  return (
    <Select
      dataTestId={"RelevanceSort.Select"}
      className={props.className}
      onChange={onChange}
      value={sort}
      label={"Sorting by"}
      labelClassName={classNames(styles.label, {}, [props.labelClassName])}
      options={relevanceOptions}
    />
  );
};
