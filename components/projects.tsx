import styled from '@emotion/styled';
import { GradientText } from './about';
import { ContentContainer } from './container';
import { Project } from './project';

export const Projects = () => {
  return (
    <ContentContainer id={'projects'}>
      <Header>
        <GradientText>Projects</GradientText>
      </Header>

      <ProjectsList>
        <Project
          description='Fiskerinc.com serves not only as the marketing hub with fully CMS driven pages, but also housed the account section for Fiskers users.'
          img='./fiskerwebsite.jpg'
          title='Fisker Website'
          layout='right'
        />
        <Project
          description='With the help of finance partners, Fisker Finance was a fully digital financing flow meant to allow users to apply and accept financing offers for Fisker vehicles.'
          img='./FF-logo.jpg'
          title='Fisker Finance'
          layout='left'
        />
        <Project
          description='Digital Motors frontend was a white label platform built using Next.Js with a really clean modern design. Search & detail pages that are fully cusomizable for showing inventory of automotive dealers to their users.'
          img='./digital-motors.jpg'
          title='Digital Motors'
          layout='right'
        />
        <Project
          description='Ally Auto: SmartAuction was a ground up build of Allys automotive auctioning platform.'
          img='./smart-auction.jpg'
          title='SmartAuction'
          layout='left'
        />
        <Project
          description='Heroes 2.0 was a fresh rebranding and relaunch of Heroes of the Storm from Blizzard Entertainment.'
          img='./heroes.jpg'
          title='Heroes 2.0'
          layout='right'
        />
        <Project
          description='Go Noobs! was an in-client application designed to show new players the ropes when they first sign up for League of Legends. This was a fully interactive experience with loads of animations!'
          img='./go-noobs.jpg'
          title='Go Noobs!'
          layout='left'
        />

        <Project
          description='League of Legends Champion Reveals. These pages would be publushed for every new champion that Riot Games would release.'
          img='./champion-reveal.jpg'
          title='LoL Champion Reveals'
          layout='left'
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
  margin-bottom: 150px;
`;
