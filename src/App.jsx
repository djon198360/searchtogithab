import { StrictMode, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RenderHeader } from "./Components/Header/Header";
import { Spiner } from "./Components/Loading/Loading";
import { RenderErrorModal } from "./Components/Modal/ErrorModal";
import AppRoutes from "./Route/Routes";
import * as S from "./Style";

export const App = () => {
  const { errorMessage } = useSelector((state) => state.tempData);

  /*   const isVisible = useSelector((state) => state.tempData.error); */
  /*   const errorMessage = useState(
    useSelector((state) => state.tempData.errorMessage)
  ); */
  const rr = Boolean(errorMessage);
  const [isModalVisible, setIsModalVisible] = useState(rr);

  console.log(isModalVisible, errorMessage, rr);
  useEffect(() => {}, [isModalVisible, setIsModalVisible]);
  return (
    <StrictMode>
      {isModalVisible ? (
        <RenderErrorModal
          isVisible={isModalVisible}
          content={errorMessage}
          onCloseError={() => setIsModalVisible(false)}
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
