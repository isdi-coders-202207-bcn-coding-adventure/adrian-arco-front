import Header from "../Header/Header";
import Counter from "../Counter/Counter";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <Header />
      <Counter />
    </LayoutStyled>
  );
};

export default Layout;
