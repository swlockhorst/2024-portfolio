import styled from '@emotion/styled';
import { GradientText } from './about';
import { ContentContainer } from './container';
import { Project } from './project';

export const Projects = () => {
  return (
    <ContentContainer>
      <Header>
        <GradientText>Projects</GradientText>
      </Header>

      <ProjectsList>
        <Project
          description='long description'
          img='https://placehold.co/600x400'
          title='Title'
          layout='right'
        />
        <Project
          description='long description'
          img='https://placehold.co/600x400'
          title='Title'
          layout='right'
        />
        <Project
          description='long description'
          img='https://placehold.co/600x400'
          title='Title'
          layout='right'
        />
      </ProjectsList>
    </ContentContainer>
  );
};

const Header = styled.div`
  font-size: 2.7rem;
  margin-bottom: 30px;
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
