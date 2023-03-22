import { useParams } from "react-router-dom";
import { Text, TextTheme } from "@/shared/ui/text";
import { BookDetails, useGetBookByIdQuery } from "@/entities/book";
import { VStack } from "@/shared/ui/stack";
import { Skeleton } from "@/shared/ui/skeleton";
import { normalizeBooks } from "@/shared/api/instance/books";

interface BookInfoProps {
  className?: string;
}

const BookInfo = (props: BookInfoProps) => {

  const { id } = useParams<{ id: string}>();

  if (!id) {
    return <Text text={"Cant load page"} />
  }

  const { data, isLoading, error } = useGetBookByIdQuery(id);

  if (isLoading) {
    return <VStack max gap={"16"}>
      <div>
        <Skeleton width={250} height={350} border={"16px"} />
      </div>
      <VStack gap={"8"}>
        <Skeleton height={"20px"} width={"200px"} />
        <Skeleton height={"65px"} width={"250px"} />
        <Skeleton height={"125px"} width={"350px"} />
      </VStack>
    </VStack>
  }

  if (!data) return null;

  if (error) {
    return <Text theme={TextTheme.ERROR} text={"Error. Can't load page."} />
  }

  const normalizeBook = normalizeBooks(data);

  return (<div className={props.className}>
    <BookDetails data={normalizeBook} />
  </div>)
}

export default BookInfo;