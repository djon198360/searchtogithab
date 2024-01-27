import { styled } from "styled-components";

export const FilterBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FilterItems = styled.div`
  /*  position: relative; */
`;

export const FilterButton = styled.div.attrs((props) => ({
  "data-name": props.name,
  "aria-hidden": "true",
  onClick: props.onClick,
}))`
  margin: 8px;
  background: #181818;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${(props) => (props.$state ? "#ad61ff" : " #fff")};
  border-radius: 38px;
  padding: 6px 20px;
  color: ${(props) => (props.$state ? "#ad61ff" : " #fff")};
`;

export const BtnText = styled(FilterButton)`
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`;

export const FilterPopap = styled.div`
  position: absolute;
  color: #d3d3d3;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  background: #313131;
  width: 13rem;
  padding: 34px;
  gap: 10px;
  z-index: 2;
`;

export const CountFilter = styled.div`
  color: white;
  background-color: rgb(173, 97, 255);
  width: 26px;
  height: 26px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -4px;
  top: -4px;
  font-family: StratosSkyeng;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
`;

export const FilterPopapItem = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  scrollbar-color: #4b4949;
  scrollbar-width: 4px;
  overflow: auto;
  height: auto;
  max-height: 240px;
  flex-direction: column;
  align-items: flex-start;
  /* сам скроллбар */
  &::-webkit-scrollbar {
    width: 4px; /* ширина для вертикального скролла */
    height: 8px; /* высота для горизонтального скролла */
    background-color: #4b4949;
  }
  /* ползунок скроллбара */
  &::-webkit-scrollbar-thumb {
    background-color: #d3d3d3;
    border-radius: 3px 0 3px 0;
  }
`;

export const FilterPopapContent = styled.div``;

export const FilterPopaptable = styled.div.attrs((props) => ({
  "data-name": props.name,
  "aria-hidden": "true",
  onClick: props.onClick,
}))``;

export const FilterPopapLink = styled.a.attrs((props) => ({
  "data-name": props.name,
  "aria-hidden": "true",
  onClick: props.onClick,
}))`
  // color: #fff;
  font-family: StratosSkyeng;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => (props.$state ? "#ad61ff" : " #fff")};

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`;
