import styled from '@emotion/styled';
import { Button } from './button';

export const Nav = () => {
  return (
    <NavContainer>
      <div>logo</div>

      <Menu>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </Menu>

      <div>
        <Button>Click Me</Button>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  border: 1px solid red;
  padding: 20px 0;
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
`;
