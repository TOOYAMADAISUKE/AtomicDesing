import styled from "styled-components";
import { SearchInput } from "../molecules/SeachInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じぇけい${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12334@exapmle.com",
    phone: "090-1111-1221",
    company: {
      name: "テスト会社"
    },

    website: "htpps://ss"
  };
});

const User = {
  name: "じぇけい",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12334@exapmle.com",
  phone: "090-1111-1221",
  company: {
    name: "テスト会社"
  },

  website: "htpps://ss"
};
export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      {users.map((User) => (
        <UserCard key={User.id} User={User} />
      ))}
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
