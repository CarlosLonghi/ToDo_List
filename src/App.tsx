import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Task } from './components/Task'
import './global.css'

import { ClipboardText } from '@phosphor-icons/react'

interface TaskObject {
  text: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskObject[]>([]);

  const handleTaskCreate = (newTask: TaskObject) => {
    setTasks([...tasks, newTask])
  }
  const completedTasksCount = tasks.filter((task) => task.isCompleted).length

  const handleTaskToggleCompletion = (taskText: string, isCompleted: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.text === taskText ? { ...task, isCompleted: !isCompleted } : task
      )
    );
  };

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Input
          onTaskCreate={handleTaskCreate}
        />
        <header>
          <div className={styles.tasks}>
            <h4>Tarefas criadas</h4>
            <span>{tasks.length}</span>
          </div>
          <div className={styles.completed}>
            <h4>Concluídas</h4>
            <span>{completedTasksCount} de {tasks.length}</span>
          </div>
        </header>

        {
          tasks.map((task) => (
            <Task
              key={task.text}
              text={task.text}
              isCompleted={task.isCompleted}
              onToggleCompletion={() => handleTaskToggleCompletion(task.text, task.isCompleted)}
            />
          ))
        }

        {
          tasks.length === 0 && (
            <div className={styles.empty}>
              <ClipboardText weight='light' />
              <h4>Você ainda não tem tarefas cadastradas</h4>
              <h4>Crie tarefas e organize seus itens a fazer</h4>
            </div>
          )
        }
      </div>
    </>
  )
}
