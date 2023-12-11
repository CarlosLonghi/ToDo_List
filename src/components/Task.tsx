import { useState } from 'react';
import styles from './Task.module.css';
import { Circle, CheckCircle, Trash } from '@phosphor-icons/react';

interface TaskProps {
  text: string;
  isCompleted: boolean;
  onToggleCompletion: () => void;
}

export function Task({ text, isCompleted, onToggleCompletion }: TaskProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [taskCompleted, setTaskCompleted] = useState(isCompleted)

  function handleToggleCompletion() {
    onToggleCompletion()
    setTaskCompleted((prevCompleted) => !prevCompleted)
  } 

  const renderCircleIcon = () => {
    switch (true) {
      case taskCompleted:
        return <CheckCircle size={25} weight='fill' />;
      case isHovering:
        return <Circle size={25} weight='duotone' />;
      default:
        return <Circle size={25} />;
    }
  };

  return (
    <article className={styles.task}>
      <button
        title='Mudar status'
        className={styles.checkButton}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleToggleCompletion}
      >
        {renderCircleIcon()}
      </button>

      <p className={taskCompleted ? styles.completedText : styles.text}>
        {text}
      </p>

      <button title='Remover tarefa' className={styles.trashButton}>
        <Trash size={25} />
      </button>
    </article>
  );
}
