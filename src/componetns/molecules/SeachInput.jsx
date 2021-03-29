import { PraimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import Styled from "styled-components";
export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrappeer>
        <PraimaryButton>検索</PraimaryButton>
      </SButtonWrappeer>
    </SContainer>
  );
};

const SContainer = Styled.div`
  display:flex;
  align-items:center;
`;
const SButtonWrappeer = Styled.div`
  padding-left:8px;
`;
