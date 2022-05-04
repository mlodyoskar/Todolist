import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { TodosProvider } from 'providers/TodosProvider';
import { TodoList } from 'views/TodoList';
import { Layout } from "./views/Layout/Layout"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <TodosProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<TodoList />} />
          </Routes>
        </Layout>
      </TodosProvider>
    </Router>
  );
}

export default App;
