import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 1.5rem;
  margin: 4rem 0;
  background-color: #efefee;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
`

export const Text = styled.h2`
  text-transform: none;
  /* font-weight: bold; */
  font-size: 3rem;
`

export const ColoredText = styled.span`
  color: ${props => props.color}
`