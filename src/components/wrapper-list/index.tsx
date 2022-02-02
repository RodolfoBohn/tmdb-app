import {
  NavigatorLeft,
  NavigatorRight,
  Wrapper,
  WrapperUl,
} from "./components";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigatAfterIcon from "@material-ui/icons/NavigateNext";
import { useEffect, useState } from "react";

interface Props {
  itemsCount: number;
  totalWidth: number;
  title: string;
  children: React.ReactChild;
}

export const WrapperList = (props: Props) => {
  const { totalWidth, title, children, itemsCount } = props;

  const [scrollX, setScrollX] = useState(0);
  const [showLeftNavigator, setShowLeftNavigator] = useState(false);
  const [showRightNavigator, setShowRightNavigator] = useState(true);

  useEffect(() => {
    function verifyRightNavigator() {
      if (window.innerWidth - 60 > totalWidth) {
        setShowRightNavigator(false);
      }
    }

    verifyRightNavigator()

  }, [totalWidth]);

  function handleLeft() {
    //valor de 430 para rodar de dois em dois itens
    const x = scrollX + 430;

    if (x >= -190) {
      setScrollX(0);
      setShowLeftNavigator(false);
      !showRightNavigator && setShowRightNavigator(true);
      return;
    }
    setScrollX(x);
    !showRightNavigator && setShowRightNavigator(true);
  }

  function handleRight() {
    const x = scrollX - 430;
    if (window.innerWidth - totalWidth > x) {
      setScrollX(window.innerWidth - totalWidth - 60);
      setShowRightNavigator(false);
      !showLeftNavigator && setShowLeftNavigator(true);
      return;
    }

    !showLeftNavigator && setShowLeftNavigator(true);
    setScrollX(x);
  }

  return (
    <Wrapper>
      <h2>{title}</h2>
      <NavigatorLeft isVisible={showLeftNavigator} onClick={handleLeft}>
        <NavigateBeforeIcon style={{ fontSize: 60 }} />
      </NavigatorLeft>
      <NavigatorRight isVisible={showRightNavigator} onClick={handleRight}>
        <NavigatAfterIcon style={{ fontSize: 60 }} />
      </NavigatorRight>
      <WrapperUl itemsCount={itemsCount} ml={scrollX}>
        {children}
      </WrapperUl>
    </Wrapper>
  );
};
