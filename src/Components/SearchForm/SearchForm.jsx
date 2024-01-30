import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setQueryString, setCurrentPage } from "../../Services/Slice/tempData";
import * as S from "./Style";

export const RenderSearchForm = ({ setButtonClick }) => {
  const dispatch = useDispatch();
  const [queryText, setQueryText] = useState("");
  const pageNumber = 1;
  const disabled = queryText <= 0 ? true : null;

  const handleButtonClick = (e) => {
    setButtonClick({ e, pageNumber, queryText });
  };
  useEffect(() => {
    dispatch(setQueryString(queryText));
    dispatch(setCurrentPage(pageNumber));
  }, [dispatch, queryText]);
  return (
    <S.SearchBlock>
      <S.LogoLink to="/profile">
        <S.Logo src="../img/search.png" />
      </S.LogoLink>
      <S.Form
        onSubmit={(e) => {
          handleButtonClick(e);
        }}
      >
        <S.Input
          type="text"
          placeholder="Введите имя для поиска"
          value={queryText}
          onChange={(e) => {
            setQueryText(e.target.value);
          }}
        />
        <S.Button disabled={disabled} type="submit">
          Поиск
        </S.Button>
      </S.Form>
    </S.SearchBlock>
  );
};
