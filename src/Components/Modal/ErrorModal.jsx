import { useDispatch } from "react-redux";
import { clearErrorMessage } from "../../Services/Slice/tempData";
import * as S from "./Style";

export const RenderErrorModal = ({
  isVisible = false,
  onCloseError,
  content,
}) => {
  const dispatch = useDispatch();
  return (
    isVisible &&
    content && (
      <S.Wrapper>
        <S.ContainerBg>
          <S.ModalBlock>
            <S.ModalContent>
              <S.ModalTitle onClick={() => dispatch(clearErrorMessage())}>
                Ошибка
              </S.ModalTitle>
              <S.ModalClose>
                <S.ModalCloseLine onClick={onCloseError}></S.ModalCloseLine>
              </S.ModalClose>
              <S.ModalProfileBlock>
                <S.ProfileBarImg>
                  <S.BarImg>
                    <S.BarImgImg src="{}" />
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
