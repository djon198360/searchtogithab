import styled from "styled-components";
/* import { device } from "../../Consts/ConstMediaScreen"; */

export const Main = styled.main``;

export const Container = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;
`;

export const ContentBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const FilterBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const Message = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;
`;

/* Пагинация */

export const blockPagination = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent;
  outline: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  border-radius: 19px;
  text-align: center;
  box-sizing: border-box;
  min-width: 38px;
  height: 38px;
  padding: 0 6px;
  margin: 0 3px;
  color: rgba(0, 0, 0, 0.87);
  transition:
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid rgba(0, 0, 0, 0.23);
  &:hover {
    transform: scale3d(1.5, 1.5, 1.5);
    transition: 0.1s;
    background-color: #f0f8ff;
  }
`;

export const prevButtonPagination = styled(Button)`
  &::after {
    content: "<";
  }
`;

export const nextButtonPagination = styled(Button)`
  &::after {
    content: ">";
  }
`;

export const buttonPagination = styled(Button).attrs((props) => ({
  key: props.key,
  id: props.id,
}))`
  color: ${(props) => (props.$primary ? "#000" : "rgba(0, 0, 0, 0.87)")};
  background-color: ${(props) => (props.$primary ? "#009ee4" : "transparent")};
`;
