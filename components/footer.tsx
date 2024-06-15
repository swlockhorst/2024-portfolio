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
          <div>
            <WordMark>
              <Logo />
              <Name>Steven Lockhorst</Name>
            </WordMark>
            <div>
              <p>Paragraph about me</p>
              <p>Paragraph about me</p>
              <p>© {year} Steven Lockhorst</p>
            </div>
          </div>

          <div>
            <FooterNav>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
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
          </div>
        </FooterLayout>
      </ContentContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background: #222;
  position: relative;
  padding: 30px 0 100px;

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
`;

export const WordMark = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 30px;
`;

const FooterNav = styled.ol`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: flex-end;
`;

export const Name = styled.span`
  font-size: 1.5rem;
`;
