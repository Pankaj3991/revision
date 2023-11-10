import React from 'react';
import Form from './Form.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    {/* fixed parts here  */}
    {/* how are you */}
      <Routes>
        <Route path='/form' element={<Form />} />
      </Routes>
      {/* fixed part here. */}
    </BrowserRouter>
  )
}

export default App
