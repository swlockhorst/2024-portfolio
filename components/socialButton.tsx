import styled from '@emotion/styled';

export const SocialButton = ({ children, link }) => {
  return (
    <Container>
      <Wrapper href={link} target='_blank'>
        <Social>
          <Icon>{children}</Icon>
        </Social>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  &:hover {
    path {
      fill: url(#main-gradient);
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 52px;
    height: 52px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-image: linear-gradient(
      to right,
      #b16cea,
      #ff5e69,
      #ff8a56,
      #ffa84b
    );
    z-index: 0;
  }
`;

const Wrapper = styled.a`
  position: relative;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #222;

  &:link {
  }

  &:visited {
    color: #fff;
  }
  &:hover {
  }
  &:active {
  }
`;

const Social = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #222;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
  }
`;

const Icon = styled.div`
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
