import styled from '@emotion/styled';
import { GradientText } from './about';
import { ContentContainer } from './container';
import { ExperienceTile } from './experienceTile';

export const Work = () => {
  return (
    <ContentContainer id={'work'}>
      <GradientHeader>
        <GradientText>Work Experience</GradientText>
      </GradientHeader>
      <TileList>
        <ExperienceTile
          companyName={'Fisker Inc.'}
          title={'Engineering Manager'}
          year={'2020-2024'}
        />

        <ExperienceTile
          companyName={'SourceStrike'}
          title={'Software Engineer'}
          year={'2019-2020'}
        />

        <ExperienceTile
          companyName={'Xome'}
          title={'Software Developer II'}
          year={'2018-2019'}
        />

        <ExperienceTile
          companyName={'Haven Agency'}
          title={'Front End Developer'}
          year={'2016-2018'}
        />
      </TileList>
    </ContentContainer>
  );
};

const GradientHeader = styled.h2`
  font-size: 2.7rem;
`;

const TileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 100px;
`;
