import styled from "styled-components";
import { Card } from "../../atoms/Card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { User } = props;
  return (
    <Card>
      <UserIconWithName image={User.image} name={User.name} />
      <SDL>
        <dt>メール</dt>
        <dd>{User.email}</dd>
        <dt>TEL</dt>
        <dd>{User.phone}</dd>
        <dt>会社名</dt>
        <dd>{User.company.name}</dd>
        <dt>web</dt>
        <dd>{User.website}</dd>
      </SDL>
    </Card>
  );
};

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }

  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
