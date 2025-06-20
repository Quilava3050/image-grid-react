import ImageRow from './components/ImageRow'
import HBDPopup from './components/HBDPopup'
import BackgroundMusic from './components/BackgroundMusic'

const images = [
  "https://files.catbox.moe/xhmkk3.jpg",
  "https://files.catbox.moe/ifvjir.jpg",
  "https://files.catbox.moe/xt1s4o.jpg",
  "https://files.catbox.moe/zk5xkc.jpg",
  "https://files.catbox.moe/0oaoe6.jpg",
  "https://files.catbox.moe/pbve5y.jpg",
  "https://files.catbox.moe/2gpxap.jpg",
  "https://files.catbox.moe/1jqzq4.jpg",
  "https://files.catbox.moe/udvz0s.jpg",
  "https://files.catbox.moe/noz28x.jpg",
  "https://files.catbox.moe/r0p7cx.jpg",
  "https://files.catbox.moe/l2yp87.jpg",
  "https://files.catbox.moe/1yvtrf.jpg",
  "https://files.catbox.moe/7d6bdf.jpg",
  "https://files.catbox.moe/b41xzh.jpg",
  "https://files.catbox.moe/2i50mj.jpg",
  "https://files.catbox.moe/9jfqwd.jpg",
  "https://files.catbox.moe/93n4yc.jpg"
]

function App() {
  return (
    <div className="App">
      <BackgroundMusic />
      <HBDPopup />
      <ImageRow direction="right" images={images} />
      <ImageRow direction="left" images={images} />
      <ImageRow direction="right" images={images} />
      <ImageRow direction="left" images={images} />
    </div>
  )
}

export default App
