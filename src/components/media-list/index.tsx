import Link from "next/link";
import { MoviesListProps } from "../../@types";
import { MediaListItem } from "./components";
import { WrapperList } from "../wrapper-list";

interface Props {
  title: string;
  items: MoviesListProps[];
  type: 'movie' | 'tv'
}

export const MediaList = (props: Props) => {
  const { title, items, type } = props;
  //calcula o tamanho total da ul
  const totalWidth = items.length * 215;

  const mediaItems = (
    <>
      {items.map((item) => {
        return (
          <MediaListItem key={item.id}>
            <Link href={`/${type}/${item.id}`}>
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
          </MediaListItem>
        );
      })}
    </>
  );

  return (
    <WrapperList
      itemsCount={items.length}
      totalWidth={totalWidth}
      title={title}
    >
      {mediaItems}
    </WrapperList>
  );
};
