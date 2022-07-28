import { FormEvent, ChangeEvent, useState } from 'react'
import logo from './logo.svg'
import style from './App.module.css';
import './global.css';

import Header from './components/header/Header';
import ToDo from './components/todo/ToDo';

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <ToDo/>
    </div>
  )
}

export default App
