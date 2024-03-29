import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import styles from './TodosAction.module.css';

import Button from '../UI/Button';

function TodosAction({ resetTodos, deleteCompletedTodos, completedTodosExit }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title={'Clear Completed Todos'}
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExit}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosAction;
