import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [Value, setValue] = useState('')
  const Check = () : void => {
    if(Value.trim() === '') {
      console.log('Вы удалили текст!')
    }
    localStorage.removeItem('text')
    localStorage.setItem("text" , Value)
  }
  useEffect(() => {
    
    const storedValue = localStorage.getItem('text')
    if (storedValue) {
      setValue(storedValue)
    }
  }, [])

  return (
    <div>
      <h3 className='info'>Блокнот</h3>
   <div className='divTextarea'>      
      <textarea className='textarea'   value={Value} onChange={(e) => setValue(e.target.value)} />
    <div>
      <button className='btnSave' onClick={Check}>Сохранить</button>
    </div>
   </div>
   </div>
  )
}

export default App
