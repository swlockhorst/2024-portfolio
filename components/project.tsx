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
`;

const ImageContainer = styled.div`
  max-width: 40%;

  img {
    width: 100%;
    height: auto;
  }
`;

const InfoLayout = styled.div`
  h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
  }
`;
