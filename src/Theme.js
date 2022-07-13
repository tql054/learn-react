import { useState, createContext } from 'react'
const ThemeContext = createContext()
function ThemeProvider({ children }) {

  
  const [theme, setTheme] = useState(true)
  function toggleTheme() {
    setTheme(!theme)
  }

  const value = {
      toggleTheme,
      theme
  }


    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
     

export {ThemeContext, ThemeProvider}
