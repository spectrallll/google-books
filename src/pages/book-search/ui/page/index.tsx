import styles from "./styles.module.scss";
import { classNames } from "@/shared/lib/class-names";
import { Container } from "@/shared/ui/container";
import { HStack, VStack } from "@/shared/ui/stack";
import { Text, TextSize, TextTheme } from "@/shared/ui/text";
import { BookSearchFilters } from "../search-fitlers";
import { BookList, getBookError, getBookFound, getBookHasMore, getBookIsLoading, getBooks } from "@/entities/book";
import { useSelector } from "react-redux";
import { LoadMoreBooksButton } from "@/features/book/load-next-data";

interface BookSearchProps {
  className?: string;
}

const BookSearch = (props: BookSearchProps) => {
  const data = useSelector(getBooks.selectAll);
  const isLoading = useSelector(getBookIsLoading)
  const hasMore = useSelector(getBookHasMore);
  const error = useSelector(getBookError);
  const found = useSelector(getBookFound);

  const showButton = Boolean(data.length && hasMore);

  if (error) {
    return (
      <Text theme={TextTheme.ERROR} text={`An unexpected error has occurred, try to reload page. ${error}`} />
    )
  }

  return (
    <div className={classNames(styles.BookSearch, {}, [props.className])}>
      <Container>
        <VStack gap={"32"} max>
          <Text size={TextSize.L} title={"Search for Books"} />
          <BookSearchFilters />
          {found && <Text text={`${found} books was found`} size={TextSize.L} />}
          <BookList
            className={styles.list}
            data={data}
            isLoading={isLoading}
            target={"_blank"}
          />
          <HStack max justify={"center"}>
            {showButton && <LoadMoreBooksButton />}
          </HStack>
        </VStack>
      </Container>
    </div>
  )
}

export default BookSearch;