import { useState } from "react";
import { useSearchUserQuery } from "../../Services/apiSearch";
import * as S from "./Style";
import { RenderSearchForm } from "../../Components/SearchForm/SearchForm";

export const RenderMain = () => {
  const [searchText, setSearchText] = useState("");
  const [responseData, setResponseData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [getSearchUser] = useSearchUserQuery();

  const handleButtonSearch = () => {
    const response = getSearchUser();
    console.log(response);
    if (response) {
      setResponseData(response);
    } else {
      setErrorMessage("error");
    }
  };

  console.log(searchText);
  return (
    <S.Main>
      {responseData}
      {errorMessage}
      {/*      {isLoading} */}
      <RenderSearchForm
        searchText={searchText}
        get={() => handleButtonSearch()}
        set={(e) => setSearchText(e)}
      />
    </S.Main>
  );
};
