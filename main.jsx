import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import App from './Components/App'
import "./index.css"

const container = document.getElementById('root');

// Создаем корень
const root = ReactDOM.createRoot(container);

// Рендерим приложение
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
