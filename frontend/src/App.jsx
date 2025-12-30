import { Route, Routes } from 'react-router-dom'
import Tudo from './Componets/Tudo'
import ReadTudo from './Componets/ReadTudo'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Tudo />} />
      <Route path='/Read/:id' element={<ReadTudo/>}/>
    </Routes>
  )
}

export default App
