import * as S from "./Style";

export const RenderSearchForm = ({ searchText, set, get }) => {
  return (
    <S.SearchBlock>
      <S.LogoLink to="/profile">
        <S.Logo src="../img/search.png" />
      </S.LogoLink>
      <S.Form>
        <S.Input
          type="text"
          placeholder="Введите имя для поиска"
          value={searchText}
          onChange={(e) => {
            set(e.target.value);
          }}
        />
        <S.Button
          type="submit"
          onChange={() => {
            get();
          }}
        >
          Поиск
        </S.Button>
      </S.Form>
    </S.SearchBlock>
  );
};
