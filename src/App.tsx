import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import './global.css'

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
      </div>
    </>
  )
}
