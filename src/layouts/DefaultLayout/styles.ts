import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 80%;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  overflow-y: auto;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['green-300']};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme['green-700']};
    border-radius: 8px;
  }
`
