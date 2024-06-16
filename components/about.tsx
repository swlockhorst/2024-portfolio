import { GitHubIcon } from '@/icons/github';
import { Linkedinicon } from '@/icons/linkedin';
import styled from '@emotion/styled';
import { ContentContainer } from './container';
import { SocialButton } from './socialButton';

export const About = () => {
  return (
    <AboutContainer>
      <ContentContainer>
        <SectionHeading>
          <span>Hi, I am</span>
          <br />
          <h1>
            <GradientText>Steven Lockhorst</GradientText>
          </h1>
        </SectionHeading>
        <IntroBody>
          Technical leader with 8 years experience in the startup and enterprise
          space who is passionate about culture, performance, accessibility, and
          process improvement.
        </IntroBody>
        <SocialLinks>
          <li>
            <SocialButton link={'https://github.com/swlockhorst'}>
              <GitHubIcon />
            </SocialButton>
          </li>
          <li>
            <SocialButton
              link={'https://www.linkedin.com/in/steven-lockhorst-6b740a94/'}
            >
              <Linkedinicon />
            </SocialButton>
          </li>
        </SocialLinks>
      </ContentContainer>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding: 60px 0;
`;

export const GradientText = styled.span`
  display: inline-block;
  background: linear-gradient(to right, #b16cea, #ff5e69, #ff8a56, #ffa84b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionHeading = styled.div`
  font-size: 2.7rem;
  text-align: center;
  margin-bottom: 40px;
`;

const IntroBody = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 400px;
  margin-bottom: 40px;
`;

const SocialLinks = styled.ol`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`;
