import React, { FormEvent } from "react";

import { HStack } from "@/shared/ui/stack";
import { Input } from "@/shared/ui/input";
import { Button, ButtonTheme } from "@/shared/ui/button";
import { Text, TextSize } from "@/shared/ui/text";
import { useSelector } from "react-redux";
import { bookModelActions, getBookSearch } from "@/entities/book";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

interface SearchBooksProps {
  className?: string;
  onSearch: () => void;
}

export const SearchBooks = (props: SearchBooksProps) => {
  const { className, onSearch } = props;

  const dispatch = useAppDispatch();

  const searchValue = useSelector(getBookSearch);

  const onChange = (value: string) => {
    dispatch(bookModelActions.setSearch(value));
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(bookModelActions.setIndex(0));
    onSearch();
  }

  return (
    <form onSubmit={onSubmit}>
      <HStack className={className} align={"center"} gap={"8"} max>
        <Input
          placeholder={"Book, series, author, genre and etc."}
          onChange={onChange}
          value={searchValue}
        />
        <Button theme={ButtonTheme.CLEAR} type={"submit"}>
          <Text text={"Search"} size={TextSize.L} />
        </Button>
      </HStack>
    </form>
  );
};
