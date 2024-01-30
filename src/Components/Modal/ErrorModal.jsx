import { useDispatch } from "react-redux";
import { clearErrorMessage } from "../../Services/Slice/tempData";
import * as S from "./Style";

export const RenderErrorModal = ({ isVisible = false, content }) => {
  const dispatch = useDispatch();
  return (
    isVisible &&
    content && (
      <S.Wrapper>
        <S.ContainerBg>
          <S.ModalBlock>
            <S.ModalContent>
              <S.ModalTitle onClick={() => dispatch(clearErrorMessage(false))}>
                Ошибка
              </S.ModalTitle>
              <S.ModalClose>
                <S.ModalCloseLine
                  onClick={() => dispatch(clearErrorMessage(false))}
                ></S.ModalCloseLine>
              </S.ModalClose>
              <S.ModalProfileBlock>
                <S.ProfileBarImg>
                  <S.BarImg>
                    <S.BarImgImg src="../img/error.jpg" />
                  </S.BarImg>
                </S.ProfileBarImg>
                {content}
              </S.ModalProfileBlock>
            </S.ModalContent>
          </S.ModalBlock>
        </S.ContainerBg>
      </S.Wrapper>
    )
  );
};
