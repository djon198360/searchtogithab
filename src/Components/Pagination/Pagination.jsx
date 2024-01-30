import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../Services/Slice/tempData";
import { getPagesArray, setPrimary } from "../../assets/utils";
import * as S from "./Style";

export const Pagination = ({
  totalPages,
  currentPage,
  handleButtonClick,
  filterPerPage,
}) => {
  const dispatch = useDispatch();
  const handleButtonClicks = ({ e, pageNumber }) => {
    dispatch(setCurrentPage(pageNumber));
    handleButtonClick({ e, pageNumber });
  };
  const prevLink = currentPage - 1;
  const nextLink = currentPage + 1;

  return totalPages > 0 && totalPages > filterPerPage ? (
    <S.blockPagination>
      <S.prevButtonPagination
        onClick={(e) => {
          handleButtonClicks({ e, pageNumber: prevLink });
        }}
        disabled={currentPage - 1 > 0 ? null : true}
      ></S.prevButtonPagination>
      {totalPages &&
        getPagesArray({ currentPage, totalPages }).map((pageNumber) => (
          <S.buttonPagination
            type="submit"
            id={pageNumber}
            $primary={setPrimary(pageNumber, currentPage)}
            key={pageNumber}
            onClick={(e) => {
              handleButtonClicks({ e, pageNumber });
            }}
          >
            {pageNumber}
          </S.buttonPagination>
        ))}
      <S.nextButtonPagination
        type="submit"
        onClick={(e) => {
          handleButtonClicks({ e, pageNumber: nextLink });
        }}
        disabled={currentPage + 1 < totalPages ? null : true}
      ></S.nextButtonPagination>
    </S.blockPagination>
  ) : null;
};
