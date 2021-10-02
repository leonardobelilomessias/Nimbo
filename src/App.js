import { useState } from 'react';
import GlobalStyle from '../src/styles/global'
import SingIn from './pages/SingIn';
import Singup from './pages/Singup'
import {AuthProvider} from './hooks/AuthContext';



function App() {
  return (  
  <>
    <GlobalStyle/>
    < AuthProvider value={{name:'leonardo'}}>
    <SingIn>
    </SingIn>
    </AuthProvider>
  </>
  );
}

export default App;
