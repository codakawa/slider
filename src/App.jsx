import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SliderComponent from './components/Slider/SliderComponent'


function App() {
  const [recommendPosts, setRecommendPosts] = useState([
    {
      name: "Плаха",
      discription: "Описание книги Плаха. Описание книги Плаха. Описание книги Плаха. Описание книги Плаха. Описание книги Плаха. ",
      id: 1
    },
    {
      name: "Манас",
      discription: "Описание книги Манас. Описание книги Манас. Описание книги Манас. Описание книги Манас. Описание книги Манас. ",
      id: 2
    },
    {
      name: "Семетей",
      discription: "Описание книги Семетей. Описание книги Семетей. Описание книги Семетей. Описание книги Семетей. Описание книги Семетей. ",
      id: 3
    },
    {
      name: "Сейтек",
      discription: "Описание книги Сейтек. Описание книги Сейтек. Описание книги Сейтек. Описание книги Сейтек. Описание книги Сейтек. ",
      id: 4
    },
    {
      name: "Волшебный камень",
      discription: "Описание книги Волшебный камень. Описание книги Волшебный камень. Описание книги Волшебный камень. Описание книги Волшебный камень. Описание книги Волшебный камень. ",
      id: 5
    },
    {
      name: "Бугу Эне",
      discription: "Описание книги Бугу Эне. Описание книги Бугу Эне. Описание книги Бугу Эне. Описание книги Бугу Эне. Описание книги Бугу Эне.",
      id: 6
    }
  ])


  return (
    <>
    <div className="wrapper">
      <div className='recommendBooksTitle'>
        <span>Р</span>
        <h1>екомендуемые книги</h1>
      </div>
      <SliderComponent postList={recommendPosts}/>
    </div>
    </>
  )
}

export default App
