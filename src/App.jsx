
import { createContext, useEffect, useState } from 'react'
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import AppRoutes from './routes/Routes'

export const ThemeContext = createContext()

function App() {
  const [context,setContext] = useState({
    theme: 'light',
    navBarOpen:false
  });

  // toggle website theme
  useEffect(() => {
    document.body.className = ''
    document.body.classList.add(context.theme)
  },[context.theme])

  return (
    <ThemeContext.Provider value={[context,setContext]}>
      <AppRoutes/>
    </ThemeContext.Provider>
  )
}

export default App
