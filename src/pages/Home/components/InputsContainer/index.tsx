import { useContext } from 'react'

import { Container, MinutesInput, TaskInput } from './styles'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function InputsContainer() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <Container>
      <label htmlFor="project">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="Dê um nome para a sua tarefa"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <label htmlFor="minutesAmount">durante</label>
      <MinutesInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </Container>
  )
}
