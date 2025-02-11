import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Form from './components/Form'
import DashContent from './components/DashContent';
import './index.css';


function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Dashboard/>}>
      <Route path='/Form' element={<Form/>}/>
      <Route path='/' element={<DashContent/>}/>
      </Route>
    </Routes>
  )
}

export default App;
