import styled from 'styled-components'

export const HomwContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  color: ${(props) => props.theme['gray-100']};
  background: ${(props) => props.theme['green-500']};
  transition: background 0.3s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  color: ${(props) => props.theme['gray-100']};
  background: ${(props) => props.theme['red-500']};
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme['red-700']};
  }
`
