import styled from '@emotion/styled';

export const Logo = () => {
  return (
    <LogoContainer>
      <Inner>SL</Inner>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  border-radius: 50%;
  min-width: 50px;
  height: 50px;
  background-image: linear-gradient(
    to right,
    #b16cea,
    #ff5e69,
    #ff8a56,
    #ffa84b
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  font-size: 1.5rem;
`;
