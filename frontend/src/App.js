import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './component/Admin';
import Signin from './component/Signin';
import Signup from './component/Signup';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route excet path='/' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
