/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
/* import { useState, useEffect } from "react"; */
import { useSelector } from "react-redux";
import * as S from "./Style";

export const Pagination = ({
  setCurrentPage,
  handleButtonClick,
  currentPage,
}) => {
  const { totalPages /* filterPerPage, currentPage, users  , totalCount */ } =
    useSelector((state) => state?.tempData);

  /*   const lastPage = currentPage * filterPerPage;
  const first = lastPage - filterPerPage;
  const current = users.splice(first, lastPage);
  console.log(current); */
  /*  const pages = [];

  for (let index = 1; index < totalPages; index++) {
    pages.push(index);
  } */

  const delta = window.innerWidth <= 460 ? 1 : 2;
  console.log(window.innerWidth <= 460);
  const pages = [];

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    console.log(i);
    pages.push(i);
  }

  if (currentPage - delta > 2) {
    pages.unshift("...");
  }

  if (currentPage + delta < totalPages - 1) {
    pages.push("...");
  }

  pages.unshift(1);

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  const setPrimary = (a, b) => {
    return a === b;
  };

  return totalPages > 0 ? (
    <S.blockPagination>
      <S.prevButtonPagination></S.prevButtonPagination>
      {pages?.length > 0 &&
        pages.map((num) => (
          <S.buttonPagination
            $primary={setPrimary(num, currentPage)}
            key={num}
            onClick={() => {
              setCurrentPage(num);
              handleButtonClick();
            }}
          >
            {num}
            {setPrimary(num, currentPage)}
          </S.buttonPagination>
        ))}
      <S.nextButtonPagination></S.nextButtonPagination>
    </S.blockPagination>
  ) : (
    <S.blockPagination></S.blockPagination>
  );
};
