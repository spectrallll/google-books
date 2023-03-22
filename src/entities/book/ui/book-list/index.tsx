import { Book } from "@/shared/api";
import { HStack } from "@/shared/ui/stack";
import { classNames } from "@/shared/lib/class-names";

import styles from "./styles.module.scss";
import { BookCard } from "../book-card";
import { BookCardSkeleton } from "@/entities/book/ui/book-card-skeleton";
import { HTMLAttributeAnchorTarget } from "react";

interface BookCardProps {
  className?: string;
  data: Book[];
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const BookList = (props: BookCardProps) => {
  const {
    className,
    data,
    isLoading,
    target
  } = props;

  return (
    <HStack max gap={"32"} wrap className={classNames(styles.BookList, {}, [className])}>
      {data?.map(book => <BookCard key={book.id} data={book} target={target} />)}
      {isLoading && new Array(8).fill(0).map((_, index) => <BookCardSkeleton key={index} />)}
    </HStack>
  );
};
