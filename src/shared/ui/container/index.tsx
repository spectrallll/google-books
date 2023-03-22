import { ReactNode } from "react";
import { classNames } from "@/shared/lib/class-names";
import styles from "./styles.module.scss";

interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

export const Container = (props: ContainerProps) => {
  return (
    <div className={classNames(styles.Container, {}, [props.className])}>
      {props.children}
    </div>
  )
}