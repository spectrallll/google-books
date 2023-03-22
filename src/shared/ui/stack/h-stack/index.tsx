import { Flex, FlexProps } from "../flex";


type HStackProps = Omit<FlexProps, "direction">;

export const HStack = (props: HStackProps) => (
  <Flex direction="row" {...props} />
);
