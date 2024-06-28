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
          <LogoContainer>
            <WordMark>
              <Logo />
              <Name>Steven Lockhorst</Name>
            </WordMark>
          </LogoContainer>

          <Menu>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#work'>Work</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
          </Menu>

          <ButtonContainer>
            <Button
              href={'https://www.linkedin.com/in/steven-lockhorst-6b740a94/'}
              target='_blank'
            >
              <ButtonInner>Lets Talk</ButtonInner>
            </Button>
          </ButtonContainer>
        </NavInner>
      </ContentContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div``;

const NavInner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: space-between; */
  padding: 20px 0;
  gap: 30px;
`;

const LogoContainer = styled.div`
  flex: 1;
  order: 1;
  display: flex;
  justify-items: center;
  /* background: red; */
`;

const Menu = styled.ul`
  order: 3;
  display: flex;
  gap: 30px;
  min-width: 100%;
  justify-content: center;

  @media (min-width: 768px) {
    order: 2;
    min-width: initial;
  }

  a {
    text-decoration: none;
    &:link {
      color: #fff;
    }
    &:visited {
      color: #fff;
    }
    &:hover {
      color: #ccc;
    }
    &:active {
      color: #fff;
    }
  }
`;

const ButtonInner = styled.span`
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  order: 1;

  @media (min-width: 768px) {
    order: 3;
  }
`;
