import styles from "../book-card/styles.module.scss";
import { classNames } from "@/shared/lib/class-names";
import { Card } from "@/shared/ui/card";
import { VStack } from "@/shared/ui/stack";
import { Skeleton } from "@/shared/ui/skeleton";

interface BookCardSkeletonProps {
  className?: string;
}

export const BookCardSkeleton = (props: BookCardSkeletonProps) => {
  const {
    className
  } = props;

  return (
    <Card
      className={classNames(styles.BookCard, {}, [className])}
    >
      <VStack gap={"32"} align={"center"}>
        <Skeleton width={"125px"} height={"200px"} border={"16px"} />
        <VStack gap={"8"} justify={"start"} className={styles.info}>
          <Skeleton width={"60px"} height={"16px"} />
          <Skeleton width={"100px"} height={"24px"} />
          <Skeleton width={"165px"} height={"16px"} />
        </VStack>
      </VStack>
    </Card>
  );
};
