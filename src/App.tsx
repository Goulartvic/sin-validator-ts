import { Header } from "./components/Header"
import { SINNumberValidator } from "./components/Validator"
import { GlobalStyle } from "./styles/Global"

function App() {
  return (
    <>
      <Header />
      <SINNumberValidator />
      <GlobalStyle/>
    </>
  )
}

export default App
