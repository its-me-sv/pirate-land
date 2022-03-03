import styled from 'styled-components';

import level1 from "../../assets/lands/f3.png";

export const IslandContainer = styled.div``;

export const GameArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 0.3rem;
  padding: 0 0.3rem;
  height: 90vh;
`;

export const BoardContainer = styled.div`
  border: 3px solid black;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Grid = styled.div`
  height: 80vh;
  background-image: url(${level1});
  background-size: cover;
  z-index: 500;
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  grid-template-columns: repeat(15, 1fr);
  border-bottom: 2px solid black;
  gap: 1px;
`;

export const Box = styled.div`
  background-color: rgba(0, 0, 0, 0.36);
  cursor: pointer;
  &:hover {
    background-color: transparent;
  }
`;

export const BoardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
`;

export const ScoreBoard = styled.a.attrs({
  target: "_blank",
})`
  border: 2px dashed rgb(0, 0, 0, 0.5);
  border-radius: 3px;
  padding: 0.3rem 0.7rem;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  cursor: pointer;
  text-decoration: none;
`;

export const VrtclLn = styled.span`
  border-left: 2px solid rgb(0, 0, 0, 0.8);
`;

export const ScoreText = styled.span<{ variant: number }>`
  font-family: PirateKids;
  font-size: 2.1rem;
  color: ${(props) => (props.variant === 1 ? `#2e66df` : `#fe0002`)};
`;