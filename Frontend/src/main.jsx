import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { InstructorProvider } from './context/InstructorContext.jsx'  // Adjust the path to your context file

//auth
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthProvider } from './context/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Auth0Provider
    domain="dev-n3u42elf31i6ebim.us.auth0.com"
    clientId="N7PorRgizkfqJ17sniWnjXKUdVCr4Osf"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <BrowserRouter>
      <AuthProvider>
        <InstructorProvider>
          <App />
        </InstructorProvider>
        </AuthProvider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
  
);
