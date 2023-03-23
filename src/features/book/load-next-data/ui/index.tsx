import { Button, ButtonTheme } from "@/shared/ui/button";
import { useSelector } from "react-redux";
import { getBookIsLoading } from "@/entities/book";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { fetchNextData } from "@/features/book/load-next-data/model/services/fetchNextData";


interface LoadMoreBooksButtonProps {
  className?: string;
  isLoading?: boolean;
}
export const LoadMoreBooksButton = (props: LoadMoreBooksButtonProps) => {

  const dispatch = useAppDispatch();
  const isLoading = useSelector(getBookIsLoading);

  const onClick = () => {
    dispatch(fetchNextData());
  }

  return <Button
    data-testid={"LoadNextData.Button"}
    className={props.className}
    theme={ButtonTheme.OUTLINE}
    disabled={isLoading}
    onClick={onClick}
  >
    Load more
  </Button>
}