import { useState } from 'react';
import styles from './Task.module.css';
import { Circle, CheckCircle, Trash } from '@phosphor-icons/react';

export function Task() {
  const [isHovering, setIsHovering] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  function handleToggleCompletion() {
    setIsCompleted(!isCompleted);
  } 

  const renderCircleIcon = () => {
    switch (true) {
      case isCompleted:
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

      <p className={isCompleted ? styles.completedText : styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae commodi tempore ad ullam voluptate laborum dicta temporibus obcaecati dolores!
      </p>

      <button title='Remover tarefa' className={styles.trashButton}>
        <Trash size={25} />
      </button>
    </article>
  );
}
