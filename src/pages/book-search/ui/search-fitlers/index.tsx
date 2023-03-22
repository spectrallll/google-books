import { HStack, VStack } from "@/shared/ui/stack";
import { SearchBooks } from "@/features/book/search-books";
import { BookCategorySort } from "@/features/book/category-sort";
import { BookRelevanceSort } from "@/features/book/relevance-sort";
import { Card } from "@/shared/ui/card";
import styles from "./styles.module.scss";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { fetchBooks } from "@/entities/book";

interface BookSearchFilters {
  className?: string;
}

export const BookSearchFilters = (props: BookSearchFilters) => {
  const dispatch = useAppDispatch();
  const onSearch = () => {
    dispatch(fetchBooks({replace: true}));
  }

  return (
    <VStack gap={"16"} max className={props.className}>
      <Card fullWidth>
        <SearchBooks onSearch={onSearch} />
      </Card>
      <HStack max justify={"spaceBetween"} className={styles.filters}>
        <BookCategorySort labelClassName={styles.filter} />
        <BookRelevanceSort labelClassName={styles.filter} />
      </HStack>
    </VStack>
  )
}
