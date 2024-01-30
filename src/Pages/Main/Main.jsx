import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RenderFilter } from "../../Components/Filter/Filter";
import { RenderItem } from "../../Components/Item/Item";
import { RenderSearchForm } from "../../Components/SearchForm/SearchForm";
import {
  setTempDataUsers,
  setIsLoading,
  setErrorMessage,
} from "../../Services/Slice/tempData";
import { useLazyGetUsersQuery } from "../../Services/apiSearch";
import { Pagination } from "../../Components/Pagination/Pagination";
import { RenderModal } from "../../Components/Modal/Modal";
import * as S from "./Style";

export const RenderMain = () => {
  const dispatch = useDispatch();
  const {
    users,
    filterPerPage,
    filterRepositore,
    filterActivity,
    totalPages,
    queryString,
    currentPage,
    totalCount,
  } = useSelector((state) => state.tempData);

  const [getUsersApi, { isLoading }] = useLazyGetUsersQuery();
  const [searchText, setSearchText] = useState(queryString);
  const [modalIdUser, setModalIdUser] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = async ({ e, pageNumber }) => {
    e.preventDefault();
    const queryStrings = {
      q: queryString,
      sort: filterActivity,
      order: filterRepositore,
      per_page: filterPerPage,
      page: pageNumber,
    };
    getUsersApi(queryStrings)
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
          dispatch(setErrorMessage("FETCH_ERROR"));
        }
        if (response?.error?.status === Number(401)) {
          dispatch(setErrorMessage("Request limit exceeded"));
        }
        if (response?.data?.items?.length === 0) {
          dispatch(setErrorMessage("Not found user"));
        }
      })
      .catch(() => {
        return dispatch(
          setErrorMessage("Произошла ошибка , попробуйте позже!")
        );
      })
      .finally();
  };

  useEffect(() => {}, [currentPage, totalPages, searchText]);
  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [isLoading]);

  return (
    <S.Main>
      {isModalVisible ? (
        <RenderModal
          key={Math.random()}
          isVisible={isModalVisible}
          content={modalIdUser}
          onClose={() => setIsModalVisible(false)}
        ></RenderModal>
      ) : null}
      <RenderSearchForm
        searchText={searchText}
        setSearchText={(e) => setSearchText(e)}
        setButtonClick={(e) => {
          handleButtonClick(e);
        }}
      />
      <S.FilterBlock>
        <RenderFilter />
      </S.FilterBlock>
      <Pagination
        handleButtonClick={(e) => {
          handleButtonClick(e);
        }}
        currentPage={currentPage}
        totalPages={totalPages}
        totalCount={totalCount}
        queryText={searchText}
        filterPerPage={filterPerPage}
      ></Pagination>
      <S.ContentBlock>
        {users
          ? users.map((user) => (
              <RenderItem
                key={user.id}
                user={user}
                setModalIdUser={() => {
                  setModalIdUser(user.login);
                }}
                modal={() => {
                  setIsModalVisible(true);
                }}
              ></RenderItem>
            ))
          : null}
      </S.ContentBlock>
      <Pagination
        handleButtonClick={(e) => {
          handleButtonClick(e);
        }}
        currentPage={currentPage}
        totalPages={totalPages}
        totalCount={totalCount}
        queryText={searchText}
        filterPerPage={filterPerPage}
      ></Pagination>
    </S.Main>
  );
};
