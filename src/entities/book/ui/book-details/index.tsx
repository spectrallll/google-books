import { classNames } from "@/shared/lib/class-names";
import styles from "./styles.module.scss";
import { Book } from "@/shared/api";
import { VStack } from "@/shared/ui/stack";
import { AppImage } from "@/shared/ui/app-image";
import { Text, TextSize } from "@/shared/ui/text";

interface BookDetailsProps {
  className?: string;
  data?: Book;
}

export const BookDetails = (props: BookDetailsProps) => {
  const { data, className } = props;
  return (<div className={classNames(styles.BookDetails, {}, [className])}>
    <VStack max>
      <div className={styles.imageWrapper}>
        <AppImage src={data?.image} />
      </div>
      <VStack data-testid={"BookDetails.Info"} className={styles.infoWrapper} gap={"16"}>
        {data?.categories && <Text text={data?.categories.join(" / ")} />}
        <Text data-testid={"BookDetails.Title"} title={data?.title} size={TextSize.L} text={data?.authors && data?.authors.join(", ")} />
        <Text text={data?.description} />
      </VStack>
    </VStack>
  </div>)
}
