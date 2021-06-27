import * as S from "./home.styles";

const HomePage = () => {
  return (
    <>
      <S.HomePageStyle />
      <h1 style={{ color: "black", marginLeft: "40px" }}>Robert Darrow</h1>
      <S.BreakerBorder>
        <S.Breaker></S.Breaker>
      </S.BreakerBorder>
    </>
  );
};

export default HomePage;
