import Icon from '@material-ui/core/Icon';
import './App.css'


export default function TodoItems({ todoList, removeTodo, finishTodo }) {
  return (
    <div>
      {
        todoList.map((name, index) => {
          return (
            <tr key={index}>
              <td
                style={{ textDecoration: name.isCompleted ? 'line-through' : '' }}
              >{name.item}</td>
              <td>
                <Icon className='icon__button' color='secondary' type='button' onClick={() => removeTodo(index)}>delete</Icon>
                <Icon className='icon__button' type='button' onClick={() => finishTodo(index)}>done</Icon>
              </td>
            </tr>
          );
        })
      }

    </div>
  );
}
