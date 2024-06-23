import styled from '@emotion/styled';
import { Button } from './button';
import { ContentContainer } from './container';
import { Name, WordMark } from './footer';
import { Logo } from './logo';

export const Nav = () => {
  return (
    <NavContainer>
      <ContentContainer>
        <NavInner>
          <WordMark>
            <Logo />
            <Name>Steven Lockhorst</Name>
          </WordMark>

          <Menu>
            <li>About</li>
            <li>Work</li>
            <li>Projects</li>
          </Menu>

          <div>
            <Button>
              <ButtonInner>Lets Talk</ButtonInner>
            </Button>
          </div>
        </NavInner>
      </ContentContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div``;

const NavInner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  padding: 20px 0;
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
`;

const ButtonInner = styled.span`
  font-weight: 600;
`;
