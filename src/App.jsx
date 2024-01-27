import AppRoutes from "./Route/Routes";
import { RenderHeader } from "./Components/Header/Header";
import * as S from "./Style";

export const App = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <RenderHeader />
        <AppRoutes />
      </S.Container>
    </S.Wrapper>
  );
};
