import { GitHubIcon } from '@/icons/github';
import { Linkedinicon } from '@/icons/linkedin';
import styled from '@emotion/styled';
import { ContentContainer } from './container';
import { Logo } from './logo';
import { SocialButton } from './socialButton';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <ContentContainer>
        <FooterLayout>
          <LogoContainer>
            <WordMark>
              <Logo />
              <Name>Steven Lockhorst</Name>
            </WordMark>
          </LogoContainer>

          <Links>
            <FooterNav>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#work'>Work</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
            </FooterNav>

            <FooterNav>
              <li>
                <SocialButton link={'https://github.com/swlockhorst'}>
                  <GitHubIcon />
                </SocialButton>
              </li>
              <li>
                <SocialButton link={'https://github.com/swlockhorst'}>
                  <Linkedinicon />
                </SocialButton>
              </li>
            </FooterNav>
          </Links>

          <Copyrights>
            <p>© {year} Steven Lockhorst</p>
          </Copyrights>
        </FooterLayout>
      </ContentContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background: #222;
  position: relative;
  padding: 30px 0;

  &:before {
    content: '';
    position: absolute;
    bottom: 100%;
    height: 3px;
    margin-top: 3px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      #b16cea,
      #ff5e69,
      #ff8a56,
      #ffa84b
    );
  }
`;

const FooterLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LogoContainer = styled.div`
  order: 1;
  flex: 1;
`;

const Links = styled.div`
  order: 2;
  flex: 1;
`;

const Copyrights = styled.div`
  order: 3;
  width: 100%;
`;

export const WordMark = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  /* justify-content: center; */
  /* margin-bottom: 30px; */
`;

const FooterNav = styled.ol`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: flex-end;

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

export const Name = styled.span`
  font-size: 1.5rem;
`;
