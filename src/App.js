import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { TodosProvider } from 'providers/TodosProvider';
import { TodoList } from 'views/TodoList';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <TodosProvider>
        <Routes>
          <Route path="/" element={<TodoList />} />
        </Routes>
      </TodosProvider>
    </Router>
  );
}

export default App;
