import styled from '@emotion/styled';

export const Project = ({ description, img, title, layout }) => {
  return (
    <Layout>
      <InfoLayout>
        <h3>{title}</h3>
        <p>{description}</p>
      </InfoLayout>

      <ImageContainer>
        <img src={img} alt='' />
      </ImageContainer>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const InfoLayout = styled.div`
  @media (min-width: 768px) {
    max-width: 300px;
    width: 100%;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
  }
`;
