import { checkProps } from "./hocs/check-props";
import { includeUser } from "./hocs/include-user";
import { UserInfoForm } from "./components/hocs/user-form";
import { UserInfo } from "./hocs/user-info";

function App() {
  return (
    <>
      <UserInfoForm />
    </>
  );
}

export default App;
