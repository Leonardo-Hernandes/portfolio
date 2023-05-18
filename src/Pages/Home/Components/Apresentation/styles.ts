import styled from 'styled-components';
import BackgroundImage from '../../../../Assets/images/backgroundImg.png'

export const Box = styled.div`
  height: 100vh;
  max-width: 100vw;
  background: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`

export const Description = styled.h1`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  box-shadow: 10px;
  text-shadow: 0.5em 0.5em 0.5em black
`;
