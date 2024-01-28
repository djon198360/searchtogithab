/* eslint-disable camelcase */
import * as S from "./Style";

export const RenderItem = ({ user }) => {
  const { avatar_url } = user;
  return (
    <S.Item>
      <S.AvatarBlock>
        <S.Avatar src={avatar_url && avatar_url}></S.Avatar>
      </S.AvatarBlock>
    </S.Item>
  );
};
