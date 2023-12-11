import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Task } from './components/Task'
import './global.css'

import { ClipboardText } from '@phosphor-icons/react'

export function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Input/>
        <header>
          <div className={styles.tasks}>
            <h4>Tarefas criadas</h4>
            <span>5</span>
          </div>
          <div className={styles.completed}>
            <h4>Concluídas</h4>
            <span>1 de 5</span>
          </div>
        </header>

        {/* <Task/> */}

        <div className={styles.empty}>
          <ClipboardText weight='light' />
          <h4>Você ainda não tem tarefas cadastradas</h4>
          <h4>Crie tarefas e organize seus itens a fazer</h4>
        </div>
      </div>
    </>
  )
}
