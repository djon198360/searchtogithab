import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPerPage, setActivityFilter } from "../../Services/Slice/tempData";
import { arrayCountItems } from "../../Consts/ConstFilter";
import * as S from "./Style";

function FilterPopapRender({ filter, data }) {
  console.log(data, { filter });
  const dispatch = useDispatch();
  const [perPageFilter, setPerPageFilter] = useState(
    useSelector((state) => state?.tempData?.filterPerPage)
  );
  const [filterGenre, setFilterGenre] = useState(
    useSelector((state) => state?.tempData?.filterGenre)
  );
  const [activity, setActivity] = useState(
    useSelector((state) => state?.tempData?.filterActivity)
  );
  console.log(activity);
  useEffect(() => {
    dispatch(setPerPage(perPageFilter));
  }, [perPageFilter]);

  /*  useEffect(() => {
    dispatch(setTempFilter(filterGenre));
  }, [filterGenre]); */

  useEffect(() => {
    console.log(activity);
    dispatch(setActivityFilter(activity));
  }, [activity, dispatch]);
  console.log(filter, data);
  switch (filter) {
    case "perPage":
      return (
        <S.FilterPopapItem>
          <S.FilterPopaptable>
            <S.FilterPopapLink onClick={() => setPerPageFilter(30)}>
              По умолчанию
            </S.FilterPopapLink>
          </S.FilterPopaptable>
          {arrayCountItems.map((perPage) => (
            <S.FilterPopapContent key={perPage}>
              <S.FilterPopapLink
                onClick={() => setPerPageFilter(perPage)}
                key={perPage}
              >
                {perPage}
              </S.FilterPopapLink>
            </S.FilterPopapContent>
          ))}
        </S.FilterPopapItem>
      );

    case "genre":
      return (
        <S.FilterPopapItem>
          {data
            .map(({ genre }) => genre)
            ?.map((genre) => (
              <S.FilterPopapContent key={genre}>
                <S.FilterPopapLink
                  onClick={() =>
                    !filterGenre.includes(genre)
                      ? setFilterGenre([...filterGenre, genre])
                      : setFilterGenre(
                          filterGenre.filter((item) => item !== genre)
                        )
                  }
                  $state={Boolean(filterGenre.includes(genre))}
                >
                  {genre}
                </S.FilterPopapLink>
              </S.FilterPopapContent>
            ))}
        </S.FilterPopapItem>
      );

    case "activity":
      return (
        <S.FilterPopapItem>
          {data.map((value) => (
            <S.FilterPopapContent key={value}>
              <S.FilterPopapLink onClick={() => setActivity(value)}>
                {value}
              </S.FilterPopapLink>
            </S.FilterPopapContent>
          ))}
        </S.FilterPopapItem>
      );

    default:
      break;
  }
}

export default FilterPopapRender;
