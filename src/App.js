import logo from './logo.svg';
import './App.css';
import AddCourse from './components/AddCourse';
import SearchCourse from './components/SearchCourse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewCourse from './components/ViewCourse';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddCourse/>} />
      <Route path='/search' element={<SearchCourse/>} />
      <Route path='/view' element={<ViewCourse/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
