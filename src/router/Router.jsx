import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../componetns/pages/Top";
import { Users } from "../componetns/pages/Users";
import { DefaultLayout } from "../componetns/templates/DefaultLayout";
import { HeaderOnly } from "../componetns/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
