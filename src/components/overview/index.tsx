import { Wrapper } from "./components";

interface Props {
  overview: string;
}

export const Overview = ({ overview }: Props) => {
  return (
    <Wrapper>
      <h3>Resumo</h3>
      <p>{overview}</p>
    </Wrapper>
  );
};
