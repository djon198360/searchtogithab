import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RenderFilter } from "../../Components/Filter/Filter";
import { RenderItem } from "../../Components/Item/Item";
import { RenderSearchForm } from "../../Components/SearchForm/SearchForm";
import { tempData } from "../../Services/Selector/Selector";
import { setTempDataUsers } from "../../Services/Slice/tempData";
import { useLazyGetUserQuery } from "../../Services/apiSearch";
import { Pagination } from "../../Components/Pagination/Pagination";
import * as S from "./Style";

export const RenderMain = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const [getUsersApi, { isLoading, isError }] = useLazyGetUserQuery();
  const tempDataUsers = useSelector(tempData);
  const { filterPerPage, filterRepositore, filterActivity, totalPages } =
    useSelector((state) => state?.tempData);
  const [currentPage, setCurrentPage] = useState(
    useSelector((state) => state?.tempData.currentPage)
  );

  const handleButtonClick = async (e) => {
    e?.preventDefault();
    getUsersApi({
      q: searchText,
      sort: filterActivity,
      order: filterRepositore,
      per_page: filterPerPage,
      page: currentPage,
    })
      .then((response) => {
        dispatch(
          setTempDataUsers({
            data: response.data.items,
            count: response.data.total_count,
            totalPages:
              Math.ceil(response.data.total_count / filterPerPage) + 1,
          })
        );
        if (response?.error?.status === "FETCH_ERROR") {
          setErrorMessage("FETCH_ERROR");
        }
        if (response?.error?.status === Number(401)) {
          setErrorMessage("Request limit exceeded");
        }
        if (response?.data?.items?.length === 0) {
          setInfoMessage("Not found user");
        }
      })
      .catch((errors) => setInfoMessage(errors))
      .finally();
  };

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

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
        <RenderFilter />
      </S.FilterBlock>

      <S.ContentBlock>
        {tempDataUsers
          ? tempDataUsers.map((user) => (
              <RenderItem key={user.id} user={user}></RenderItem>
            ))
          : null}
      </S.ContentBlock>
      <Pagination
        handleButtonClick={() => handleButtonClick()}
        setCurrentPage={(e) => setCurrentPage(e)}
        currentPage={currentPage}
        totalPages={totalPages}
      ></Pagination>
    </S.Main>
  );
};
