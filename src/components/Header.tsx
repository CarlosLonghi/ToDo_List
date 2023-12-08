import styles from './Header.module.css'
import toDoLogo from '../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="ToDo logo"/>
      <h1>to<span>do</span></h1>
    </header>
  )
}