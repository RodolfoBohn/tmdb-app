import { CastProps } from "../../@types";
import { List } from "./components/media-list";
import { NavigatorLeft, NavigatorRight, Wrapper } from "./components";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigatAfterIcon from "@material-ui/icons/NavigateNext";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  items: CastProps[];
}

export const CastList = (props: Props) => {
  const { title, items } = props;

  //calcula largura maxima da ul
  const totalWidth = items.length * 215 + 60 - 15;
  const [scrollX, setScrollX] = useState(0);
  const [showLeftNavigator, setShowLeftNavigator] = useState(false);
  const [showRightNavigator, setShowRightNavigator] = useState(true);

  useEffect(() => {
    totalWidth < window.innerWidth && setShowRightNavigator(false)
  },[])

  function handleLeft() {
    const x = scrollX + Math.round(totalWidth / 6);

    if (totalWidth < window.innerWidth) {
      setShowLeftNavigator(false);
      setShowRightNavigator(false);
      setScrollX(0);
      return;
    }

    if (x >= 0) {
      setScrollX(0);
      setShowLeftNavigator(false);
      setShowRightNavigator(true);
      return;
    }
    setScrollX(x);
    setShowLeftNavigator(true);
    setShowRightNavigator(true);
  }

  function handleRight() {
    const x = scrollX - Math.round(totalWidth / 6);
    if (totalWidth < window.innerWidth) {
      setShowLeftNavigator(false);
      setShowRightNavigator(false);
      return;
    }
    if (window.innerWidth - totalWidth >= x) {
      setScrollX(window.innerWidth - totalWidth);
      setShowRightNavigator(false);
      setShowLeftNavigator(true);
    }
    setScrollX(x);
    setShowRightNavigator(true);
    setShowLeftNavigator(true);
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
      <List itemsCount={items.length} ml={scrollX}>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <div>
                <img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                      : "/profile.png"
                  }
                  alt={item.name}
                />
                <p>{item.name}</p>
                <p>{item.character}</p>
              </div>
            </li>
          );
        })}
      </List>
    </Wrapper>
  );
};
