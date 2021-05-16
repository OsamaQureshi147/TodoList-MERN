import Icon from '@material-ui/core/Icon';
import './App.css'


export default function TodoItems({ todoList, removeTodo, finishTodo }) {
  return (
    <div className='table'>
      {
        todoList.map((name, index) => {
          return (
            <tr className='table__row' key={index}>
              <td
                style={{
                  textDecoration: name.isCompleted ? 'line-through' : '',
                  flex: 0.85
                }}
              >{name.item}</td>
              <td
                style={{
                  flex: 0.15
                }}
              >
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
