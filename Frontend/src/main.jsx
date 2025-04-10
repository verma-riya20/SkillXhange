import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { InstructorProvider } from './context.jsx/InstructorContext.jsx'  // Adjust the path to your context file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <InstructorProvider>
        <App />
      </InstructorProvider>
    </BrowserRouter>
  </React.StrictMode>
)
