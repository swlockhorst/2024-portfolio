// @ts-nocheck
import styled from '@emotion/styled';

export const ExperienceTile = ({ companyName, title, year }) => {
  return (
    <Tile>
      <div>
        Company: {companyName}
        <br />
        <br />
        Title: {title}
      </div>

      <div>{year}</div>
    </Tile>
  );
};

const Tile = styled.div`
  position: relative;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    /* padding: 30px; */
  }

  &: after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 1px;
    width: 100%;
    background: rgba(73, 100, 255, 0.2);
  }
`;
