/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsLoading, setErrorMessage } from "../../Services/Slice/tempData";
import {
  useGetUserIdQuery,
  useLazyGetRepoUserIdQuery,
} from "../../Services/apiSearch";
import { formatDateCreate } from "../../assets/utils";
import * as S from "./Style";

export const RenderModal = ({ isVisible = false, onClose, content }) => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useGetUserIdQuery({ content });
  const [getRepo, { isLoading: loading }] = useLazyGetRepoUserIdQuery();
  const [repoData, setRepoData] = useState();

  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [isLoading, loading]);

  useEffect(() => {
    dispatch(setErrorMessage("Произошла ошибка , попробуйте позжеc!"));
  }, [error]);

  if (data) {
    const {
      login,
      avatar_url,
      created_at,
      bio,
      followers,
      following,
      location,
      name,
      public_repos,
      updated_at,
    } = data;
    const getRepos = async () => {
      const result = await getRepo({ login });
      setRepoData(result.data);
    };

    return (
      isVisible &&
      data && (
        <S.Wrapper>
          <S.ContainerBg>
            <S.ModalBlock>
              <S.ModalContent>
                <S.ModalTitle onClick={onClose}>
                  Информация о {data.login}
                </S.ModalTitle>
                <S.ModalClose>
                  <S.ModalCloseLine onClick={onClose}></S.ModalCloseLine>
                </S.ModalClose>
                <S.ModalProfileBlock>
                  <S.ProfileBarImg>
                    <S.BarImg>
                      <S.BarImgImg src={avatar_url} />
                    </S.BarImg>
                  </S.ProfileBarImg>
                  {name ? <S.ProfileLabel>Имя: {name}</S.ProfileLabel> : null}
                  <S.ProfileLabel>Логин: {login}</S.ProfileLabel>
                  <S.ProfileLabel>
                    Зарегистрировался: {formatDateCreate(created_at)}
                  </S.ProfileLabel>
                  {bio ? (
                    <S.ProfileLabel>Биография: {bio}</S.ProfileLabel>
                  ) : null}
                  {followers ? (
                    <S.ProfileLabel>Подписчиков: {followers}</S.ProfileLabel>
                  ) : null}
                  {following ? (
                    <S.ProfileLabel>Подписок: {following}</S.ProfileLabel>
                  ) : null}
                  {location ? (
                    <S.ProfileLabel>Страна: {location}</S.ProfileLabel>
                  ) : null}
                  {updated_at ? (
                    <S.ProfileLabel>
                      Последнее обновление: {formatDateCreate(updated_at)}
                    </S.ProfileLabel>
                  ) : null}
                  {public_repos ? (
                    <S.ProfileLabel
                      onClick={() => {
                        getRepos();
                      }}
                    >
                      Публичных репозиториев: {public_repos}
                    </S.ProfileLabel>
                  ) : null}
                </S.ModalProfileBlock>
                {repoData
                  ? repoData.map((repo) => (
                      <S.ProfileLabel key={Math.random()}>
                        {repo.name}
                      </S.ProfileLabel>
                    ))
                  : null}
              </S.ModalContent>
            </S.ModalBlock>
          </S.ContainerBg>
        </S.Wrapper>
      )
    );
  }
  return (
    isVisible && (
      <S.Wrapper>
        <S.ContainerBg>
          <S.ModalBlock>
            <S.ModalContent>
              <S.ModalTitle onClick={onClose}>Информация</S.ModalTitle>
              <S.ModalClose>
                <S.ModalCloseLine onClick={onClose}></S.ModalCloseLine>
              </S.ModalClose>
            </S.ModalContent>
          </S.ModalBlock>
        </S.ContainerBg>
      </S.Wrapper>
    )
  );
};
