import * as S from "./Style";

export const RenderHeader = () => {
  return (
    <S.Header>
      <S.Container>
        <S.LogoLink to="/">
          <S.Logo src="img/search.png" alt="" />
        </S.LogoLink>
        <S.Nav></S.Nav>
      </S.Container>
    </S.Header>
  );
};
