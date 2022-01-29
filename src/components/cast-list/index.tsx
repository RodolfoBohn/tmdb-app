import { CastProps } from "../../@types";
import { CastListItem } from "./components";
import { WrapperList } from "../wrapper-list";

interface Props {
  title: string;
  items: CastProps[];
}

export const CastList = (props: Props) => {
  const { title, items } = props;

  //calcula largura maxima da ul
  const totalWidth = items.length * 215;
  const CastItems = (
    <>
      {items.map((item) => {
        return (
          <CastListItem key={item.id}>
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
          </CastListItem>
        );
      })}
    </>
  );

  return (
    <WrapperList
      itemsCount={items.length}
      title={title}
      totalWidth={totalWidth}
    >
      {CastItems}
    </WrapperList>
  );
};
