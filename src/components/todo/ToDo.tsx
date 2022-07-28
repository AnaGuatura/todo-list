import style from './ToDo.module.css'
import Plus from '../../assets/plus.svg'
import Trash from '../../assets/trash.svg'
import Clipboard from '../../assets/clipboard.svg'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Task {
  description: string;
  status: string;
}

function ToDo() {
  const [newItem, setNewItem] = useState({ description: '', status: '' } as Task)
  const [items, setItems] = useState([] as Task[])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItem({ description: event.target.value, status: 'OPEN' })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setItems([...items, newItem])
    setNewItem({ description: '', status: '' })
  };

  const removeItemFromList = (description: string) => {
    const newList = items.filter(item => item.description !== description)
    setItems(newList)
  }

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    const newList: Task[] = items.map((item: Task) => {
      if (item.description === event.target.value)
        item.status = event.target.checked ? 'CLOSED' : 'OPEN'

      return item;
    })

    setItems(newList)
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          placeholder='Adicione uma nova tarefa'
          value={newItem.description}
          onChange={handleChange}
        />
        <button type='submit' disabled={!newItem.description}>
          <span>Criar</span>
          <img src={Plus} alt="Ícone com símbolo de adicionar" />
        </button>
      </form>
      <section className={style.listWrapper}>
        <header className={style.listHeader}>
          <div className={style.listQtt}>
            <h1>Tarefas criadas</h1>
            <span>{items.length}</span>
          </div>
          <div className={style.listClosedQtt}>
            <h1>Concluídas</h1>
            <span>
              {`${items.filter(item => item.status === 'CLOSED').length} de ${items.length}`}
            </span>
          </div>
        </header>
        { items.length === 0 &&
          <div className={style.emptyList}>
            <img src={Clipboard} />
            <div className={style.emptyListText}>
              <span>Você ainda não tem tarefas cadastradas</span>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        }
        <div>
          {items.map((item: Task) => {
            return (
              <div className={style.item} key={item.description}>
                <div className={style.round}>
                  <input
                    id={item.description}
                    type="checkbox"
                    name={item.description}
                    value={item.description}
                    checked={item.status === 'CLOSED'}
                    onChange={handleCheck}
                  />
                  <label htmlFor={item.description}></label>
                  <span className={item.status === 'CLOSED' ? style.closed : ''}>
                    {item.description}
                  </span>
                </div>
                <img
                  src={Trash}
                  onClick={() => removeItemFromList(item.description)}
                />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default ToDo