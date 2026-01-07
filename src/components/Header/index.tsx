import { HeaderNav, HeaderStyles, HeaderText, Icons, Input, UserIcon } from './styles';

const Header = () => {
  return (
    <HeaderStyles>
      <HeaderText>
        <h1>Dashboard</h1>
        <h3>Visão geral dos seus investimentos</h3>
      </HeaderText>
      <HeaderNav>
        <Input type="text" placeholder="Buscar..." />
        <Icons>Not.</Icons>
        <UserIcon>User</UserIcon>
      </HeaderNav>
    </HeaderStyles>
  );
};
export default Header;
