import { FooterWrapper } from "./components";

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>Feito por Rodolfo Bohn</p>
      <p>
        Dados provenientes de{" "}
        <a href="https://www.themoviedb.org/">themoviedb.org</a>{" "}
      </p>
      <div>
        <a href="https://github.com/RodolfoBohn">
          <img src="/github.png" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/rodolfo-f-539738a5">
          <img src="/linkedin.png" alt="linkedin" />
        </a>
      </div>
    </FooterWrapper>
  );
};
