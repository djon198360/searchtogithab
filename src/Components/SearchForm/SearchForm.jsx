import * as S from "./Style";

export const RenderSearchForm = ({
  searchText,
  setSearchText,
  setButtonClick,
}) => {
  return (
    <S.SearchBlock>
      <S.LogoLink to="/profile">
        <S.Logo src="../img/search.png" />
      </S.LogoLink>
      <S.Form
        onSubmit={(e) => {
          setButtonClick(e);
        }}
      >
        <S.Input
          type="text"
          placeholder="Введите имя для поиска"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <S.Button type="submit">Поиск</S.Button>
      </S.Form>
    </S.SearchBlock>
  );
};
