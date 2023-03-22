import { CSSProperties } from "react";
import styles from "./styles.module.scss";
import { classNames } from "@/shared/lib/class-names";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = (props: SkeletonProps) => {
  const { className, height, width, border } = props;

  const style: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div className={classNames(styles.Skeleton, {}, [className])} style={style}>
      <div />
      <div>
        <span />
      </div>
    </div>
  );
};