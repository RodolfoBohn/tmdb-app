import Link from "next/link";
import { MoviesListProps } from "../../@types";
import { List } from "./components/media-list";
import { NavigatorLeft, NavigatorRight, Wrapper } from "./components";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigatAfterIcon from "@material-ui/icons/NavigateNext";
import { useState } from "react";

interface Props {
  title: string;
  items: MoviesListProps[];
}

export const MediaList = (props: Props) => {
  const { title, items } = props;

  const [scrollX, setScrollX] = useState(0);
  const [showLeftNavigator, setShowLeftNavigator] = useState(false)
  const [showRightNavigator, setShowRightNavigator] = useState(true)

  function handleLeft() {
    const x = scrollX + Math.round(window.innerWidth / 3);

    if (x >= 0) {
      setScrollX(0);
      setShowLeftNavigator(false)
      setShowRightNavigator(true)
    } else {
      setScrollX(x);
      setShowLeftNavigator(true)
      setShowRightNavigator(true)
    }
  }

  function handleRight() {
    const x = scrollX - Math.round(window.innerWidth / 3);
    const totalWidth = items.length * 215 + 60 - 15;

    if (window.innerWidth - totalWidth >= x) {
      setScrollX(window.innerWidth - totalWidth);
      setShowRightNavigator(false)
      setShowLeftNavigator(true)
    } else {
      setScrollX(x);
      setShowRightNavigator(true)
      setShowLeftNavigator(true)
    }
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
              <Link href={`/movie/${item.id}`}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.title}
                  />
                  <span>
                    <p>Ver mais</p>
                  </span>
                  <p>{item.title}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </List>
    </Wrapper>
  );
};
