import { HorizontalShadow, VerticalShadow, Wrapper } from "./components";

interface Props {
  posterImage: string;
  title: string
}

export const FeaturedImage = (props: Props) => {
  const { posterImage, title } = props;
  return (
    <Wrapper style={{ backgroundImage: `url(${posterImage})` }}>
      <VerticalShadow>
        <HorizontalShadow>
          <h2>{title}</h2>
        </HorizontalShadow>
      </VerticalShadow>
    </Wrapper>
  );
};
