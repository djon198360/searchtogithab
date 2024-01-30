import { StrictMode } from "react";
import { useSelector } from "react-redux";
import { RenderHeader } from "./Components/Header/Header";
import { Spiner } from "./Components/Loading/Loading";
import { RenderErrorModal } from "./Components/Modal/ErrorModal";
import AppRoutes from "./Route/Routes";
import * as S from "./Style";

export const App = () => {
  const { errorMessage } = useSelector((state) => state.tempData);
  const isVisible = Boolean(errorMessage);

  return (
    <StrictMode>
      {isVisible ? (
        <RenderErrorModal
          key={Math.random()}
          isVisible={isVisible}
          content={errorMessage}
        ></RenderErrorModal>
      ) : null}
      <Spiner loading={useSelector((state) => state.tempData.loading)} />
      <S.Wrapper>
        <S.Container>
          <RenderHeader />
          <AppRoutes />
        </S.Container>
      </S.Wrapper>
    </StrictMode>
  );
};
