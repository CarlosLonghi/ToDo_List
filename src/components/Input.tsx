import styles from './Input.module.css'
import { ListPlus } from '@phosphor-icons/react'

export function Input() {
  return(
    <div className={styles.wrapper}>
      <input
        className={styles.input} 
        type='text' 
        placeholder='Adicione uma nova tarefa' 
      />
      <button className={styles.button}>
        Criar
        <ListPlus size={20} weight='bold'/>
      </button>
    </div>
  )
}