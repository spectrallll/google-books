import styles from "./styles.module.scss";
import { classNames } from "@/shared/lib/class-names";
import { Card } from "@/shared/ui/card";
import { Book } from "@/shared/api";
import { AppImage } from "@/shared/ui/app-image";
import { VStack } from "@/shared/ui/stack";
import { Text, TextTheme } from "@/shared/ui/text";
import { Skeleton } from "@/shared/ui/skeleton";
import { HTMLAttributeAnchorTarget } from "react";
import { Link } from "react-router-dom";
import { getRouteBookDetails } from "@/shared/const/router";

interface BookCardProps {
    className?: string;
    data: Book;
    target?: HTMLAttributeAnchorTarget;
}

export const BookCard = (props: BookCardProps) => {
  const {
    className,
    data,
    target
  } = props;

  return (
      <Card
        className={classNames(styles.BookCard, {}, [className])}
      >
        <Link to={getRouteBookDetails(data.id)} target={target}>
        <VStack gap={"32"} align={"center"} max>
          <AppImage
            className={styles.image}
            src={data.image}
            errorFallback={<Text theme={TextTheme.ERROR} text={"Невозможно загрузить изображение"} />}
            fallback={<Skeleton width={"125px"} height={"200px"} border={"16px"} />}
            border={"16px"}
          />
          <VStack gap={"4"} justify={"start"} max className={styles.info}>
            <Text text={data.categories && data.categories.join(" ")} textTag={"span"} />
            <Text title={data?.title} headerTag={"span"} className={styles.title} />
            <Text text={data.authors && data?.authors.join(" ")} textTag={"span"} />
          </VStack>
        </VStack>
        </Link>
      </Card>
  );
};
