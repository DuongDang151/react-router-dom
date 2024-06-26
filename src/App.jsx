import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import More from './pages/More'
import Sidebar from './pages/Sidebar'
import Test1 from './pages/Test1'
import Test2 from './pages/Test2'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/test1' element={<Test1 />} />
        <Route path='/test2' element={<Test2 />} />
      </Route>
      <Route path='/more' element={<More />}>
        <Route path='/more' element={<div style={{color: '#000'}}>dadas</div>} />
        <Route path='/more/test4' element={<Test2 />} />
      </Route>
      <Route path='/sidebar' element={<Sidebar />} />
    </Routes>
  )
}

export default App  
