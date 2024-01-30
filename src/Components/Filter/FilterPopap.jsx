import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPerPageFilter,
  setActivityFilter,
  setRepositoreFilter,
} from "../../Services/Slice/tempData";
/* import { filterUnicum } from "../../assets/utils"; */
import * as S from "./Style";

function FilterPopapRender({ filter, data }) {
  console.log(data, { filter });
  const dispatch = useDispatch();

  const [perPage, setPerPage] = useState(
    useSelector((state) => state?.tempData?.filterPerPage)
  );
  const [repositore, setRepositore] = useState(
    useSelector((state) => state?.tempData?.filterRepositore)
  );
  const [activity, setActivity] = useState(
    useSelector((state) => state?.tempData?.filterActivity)
  );

  useEffect(() => {
    dispatch(setPerPageFilter(perPage));
  }, [perPage]);

  useEffect(() => {
    dispatch(setRepositoreFilter(repositore));
  }, [repositore]);

  useEffect(() => {
    dispatch(setActivityFilter(activity));
  }, [activity]);

  console.log(filter, data);
  switch (filter) {
    case "perPage":
      return (
        <S.FilterPopapItem>
          <S.FilterPopaptable>
            <S.FilterPopapLink onClick={() => setPerPage([30])}>
              По умолчанию
            </S.FilterPopapLink>
          </S.FilterPopaptable>
          {data.map((perPageValue) => (
            <S.FilterPopapContent key={perPageValue}>
              <S.FilterPopapLink
                onClick={() => setPerPage([perPageValue])}
                key={perPageValue}
                $state={Boolean(perPage.includes(perPageValue))}
              >
                {perPageValue}
              </S.FilterPopapLink>
            </S.FilterPopapContent>
          ))}
        </S.FilterPopapItem>
      );

    case "repositore":
      return (
        <S.FilterPopapItem>
          {Object.entries(data).map(([key, value]) => (
            <S.FilterPopapContent key={key}>
              <S.FilterPopapLink
                onClick={() => setRepositore(key)}
                $state={Boolean(repositore.includes(key))}
              >
                {value}
              </S.FilterPopapLink>
            </S.FilterPopapContent>
          ))}
        </S.FilterPopapItem>
      );

    case "activity":
      return (
        <S.FilterPopapItem>
          {Object.entries(data).map(([key, value]) => (
            <S.FilterPopapContent key={key}>
              <S.FilterPopapLink
                onClick={() => setActivity(key)}
                $state={Boolean(activity.includes(key))}
              >
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
