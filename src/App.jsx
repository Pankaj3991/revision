import React from 'react';
import Form from './Form.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/form' element={<Form />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
