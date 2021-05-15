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

              <Icon className='icon__button' color='secondary' type='button' onClick={() => removeTodo(index)}>delete</Icon>
              <Icon className='icon__button' type='button' onClick={() => finishTodo(index)}>done</Icon>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
