import React/*, { useEffect, useState }*/ from 'react'
import Global from './styles/App.styles'
import Header from './modules/Header'

const App = () => {
  /*
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch('/api/users').then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])*/

  return (
    <Global>
      <Header />
    </Global>
  )
}

export default App