import { useState } from "react";
import FilterPopapRender from "./FilterPopap";
import { arrayActivity, arrayCountItems } from "../../Consts/ConstFilter";
import * as S from "./Style";

export const RenderFilter = () => {
  const [isState, setState] = useState({ isChecked: null });

  const handleFilter = (event) => {
    const popapName = event;
    if (isState.isChecked && isState.filter === popapName) {
      setState({ isChecked: false, filter: false });
    } else {
      setState({ filter: popapName, isChecked: true });
    }
  };
  console.log(isState);

  return (
    <S.FilterBlock>
      <S.FilterItems>
        <S.BtnText
          /* setFilter={isState.filter} */ onClick={() =>
            handleFilter("perPage")
          }
        >
          Кол-во пользователей
        </S.BtnText>
        {isState && isState.filter === "perPage" ? (
          <S.FilterPopap>
            <FilterPopapRender filter={isState.filter} data={arrayCountItems} />
          </S.FilterPopap>
        ) : null}
      </S.FilterItems>

      <S.FilterItems>
        <S.BtnText
          $state={isState.filter === "year" ? 1 : 0}
          onClick={handleFilter}
        >
          году выпуска
        </S.BtnText>
        {isState && isState.filter === "year" ? (
          <S.FilterPopap>
            <FilterPopapRender event={isState.filter} />
          </S.FilterPopap>
        ) : null}
      </S.FilterItems>

      <S.FilterItems>
        <S.BtnText onClick={() => handleFilter("activity")}>
          По активности
        </S.BtnText>
        {isState && isState.filter === "activity" ? (
          <S.FilterPopap>
            <FilterPopapRender filter={isState.filter} data={arrayActivity} />
          </S.FilterPopap>
        ) : null}
      </S.FilterItems>
    </S.FilterBlock>
  );
};
