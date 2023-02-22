import styled from 'styled-components';
import { NavStylesProps } from '../../types';

export const ProgressBarWrapper = styled.div`
  height: 40px;
  width: 100%;
  background-color: white;
  margin: 36px 0px;
  border: 1px gray solid;
  position: relative;
`;

export const ProgressBarChild = styled.div<NavStylesProps>`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: ${(props) => props.color};
  transition: width 1s ease-in-out;
`;

export const ProgressBarLabel = styled.span`
  color: black;
  position: absolute;
  left: 50%;
  top: 25%;
`;
