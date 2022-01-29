import Link from "next/link";
import { HeaderWrapper } from "./components";

interface Props {
  hasBackgroundColor: boolean
}

export const Header = (props: Props) => {
  const {hasBackgroundColor} = props
  return (
    <HeaderWrapper hasBackgroundColor={hasBackgroundColor}>
      <Link href='/'>
        <img src="/logo.png" alt="logo" />
      </Link>
    </HeaderWrapper>
  );
};
