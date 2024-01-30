/* eslint-disable camelcase */

import * as S from "./Style";

export const RenderItem = ({ user, modal, setModalIdUser }) => {
  const { avatar_url, login } = user;
  return (
    <S.ItemLink
      onClick={() => {
        setModalIdUser(login);
        modal(true);
      }}
    >
      <S.Item>
        <S.AvatarBlock>
          <S.Avatar src={avatar_url && avatar_url}></S.Avatar>
        </S.AvatarBlock>
        <S.AvatarSpan>{login}</S.AvatarSpan>
      </S.Item>
    </S.ItemLink>
  );
};
