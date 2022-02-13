import "./assets/scss/global.scss"
import { AppHeader } from "./cmps/AppHeader"
import { ImageUpload } from "./pages/ImageUpload"

function App() {
  return (
    <div className="App">
      <header>
        <AppHeader></AppHeader>
      </header>
      <div className="main-container">
        <ImageUpload></ImageUpload>
      </div>
    </div>
  )
}

export default App
