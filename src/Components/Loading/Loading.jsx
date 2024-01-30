import * as S from "./Style";

export const Spiner = ({ loading }) => {
  return loading ? (
    <S.SpinWrapper>
      <S.Spin></S.Spin>
    </S.SpinWrapper>
  ) : null;
};
