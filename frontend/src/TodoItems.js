import Icon from '@material-ui/core/Icon';


export default function TodoItems({ todoList, removeTodo, finishTodo }) {
  return (
    <div>
      <ul>
        {todoList.map((name, index) => {
          return (
            <li
              key={index}
              style={{ textDecoration: name.isCompleted ? 'line-through' : '' }}
            >
              {name.item}
              <span className='todo-btn'>
                <Icon type='button' onClick={() => removeTodo(index)}>delete</Icon>
                <Icon type='button' onClick={() => finishTodo(index)}>done</Icon>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
