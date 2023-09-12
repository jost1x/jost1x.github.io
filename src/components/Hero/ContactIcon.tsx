import { Link } from "@chakra-ui/react";

interface Props {
    href: string;
    children: any;
}


export function ContactIcon(props: Props) {

  const {children, href} = props


  return (
    <li style={{ margin: "10px" }}>
      <Link href={href} isExternal _hover={{color: "gray.500"}}>
        {children}
      </Link>
    </li>
  );
}
