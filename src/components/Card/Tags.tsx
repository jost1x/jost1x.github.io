import { Tag } from "@chakra-ui/react";

interface Props {
  children: string;
  key: string
}

export function IndividualTag(props: Props) {
  const { children } = props;

  const style = {
    size: "md",
    variant: "solid",
    colorScheme: "gray",
    mr: "5px",
  };

  return <Tag {...style} key={`${children}-1`}>{children}</Tag>;
}
