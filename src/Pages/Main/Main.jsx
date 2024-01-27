import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RenderFilter } from "../../Components/Filter/Filter";
import { RenderItem } from "../../Components/Item/Item";
import { RenderSearchForm } from "../../Components/SearchForm/SearchForm";
import { tempData } from "../../Services/Selector/Selector";
import { setTempDataUsers } from "../../Services/Slice/tempData";
import { useLazyGetUserQuery } from "../../Services/apiSearch";
import * as S from "./Style";

export const RenderMain = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const [getUsersApi, { isLoading, isError }] = useLazyGetUserQuery();
  const tempDataUsers = useSelector(tempData);
  const { filterPerPage, filterRepositore, filterActivity } = useSelector(
    (state) => state?.tempData
  );

  const handleButtonClick = async (e) => {
    e.preventDefault();
    getUsersApi({
      q: searchText,
      sort: filterActivity,
      order: filterRepositore,
      per_page: filterPerPage,
    })
      .then((response) => {
        dispatch(
          setTempDataUsers({
            data: response.data.items,
            count: response.data.total_count,
          })
        );
        if (response.error.status === "FETCH_ERROR") {
          setErrorMessage("FETCH_ERROR");
        }
        if (response.error.status === Number(401)) {
          setErrorMessage("Request limit exceeded");
        }
        if (response.data.items.length === 0) {
          setInfoMessage("Not found user");
        }
      })
      .catch((errors) => console.dir(`${errors}`))
      .finally(console.log("end "));
  };

  return (
    <S.Main>
      {isLoading ? "loading" : null}
      {isError ? "errors " : null}
      {infoMessage}
      {errorMessage}
      <RenderSearchForm
        searchText={searchText}
        setSearchText={(e) => setSearchText(e)}
        setButtonClick={(e) => handleButtonClick(e)}
      />
      <S.FilterBlock>
        <RenderFilter></RenderFilter>
      </S.FilterBlock>

      <S.ContentBlock>
        {tempDataUsers
          ? tempDataUsers.map((user) => (
              <RenderItem key={user.id} user={user}></RenderItem>
            ))
          : null}
      </S.ContentBlock>
    </S.Main>
  );
};
