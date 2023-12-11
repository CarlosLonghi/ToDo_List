import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import styles from './Input.module.css'
import { ListPlus } from '@phosphor-icons/react'

interface InputProps {
  onTaskCreate: (
    newTask: { 
      text: string;
      isCompleted: boolean
    }) => void;
}

export function Input({ onTaskCreate }: InputProps) {
  const [newTaskText, setNewTaskText] = useState('')
  
  const isNewTaskEmpty = newTaskText.length === 0

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    if (newTaskText) {
      const newTask = {
        text: newTaskText,
        isCompleted: false
      }

      onTaskCreate(newTask);
      setNewTaskText('');
    }       
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Escreva uma tarefa!')
  }
  
  return(
    <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
      <input
        className={styles.input} 
        name='task'
        type='text' 
        placeholder='Adicione uma nova tarefa' 
        value={newTaskText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
      />
      <button 
        className={styles.button}
        disabled={isNewTaskEmpty}
      >
        Criar
        <ListPlus size={20} weight='bold'/>
      </button>
    </form>
  )
}