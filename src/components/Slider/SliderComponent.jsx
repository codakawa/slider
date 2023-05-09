import React, { useEffect, useState } from 'react'
import SliderBlock from '../SliderBlock/SliderBlock'

const SliderComponent = ({postList}) => {
    const [currentPosts, setCurrentPosts] = useState([])
    const [sliderPage, setSliderPage] = useState(1)
    
    useEffect(() => {
        const newCurrent = []
        for(let i = (sliderPage*2)-2; i < (sliderPage*2); i++) {
            newCurrent.push(postList[i])
        }
        setCurrentPosts(newCurrent)

        const interval = setInterval(() => {
            changeSlide()
        }, 5000)

        return () => {
            clearInterval(interval)
        }

    }, [ sliderPage ])

    const changeSlide = (direct = 1) => {
        if(sliderPage+direct < 1) setSliderPage(3)
        else if(sliderPage+direct > 3) setSliderPage(1)
        else setSliderPage(sliderPage+(direct))
    }
  return (
    <div className='slider'>
        <div className="sliderBlocks">
            {currentPosts.map(post => <SliderBlock postInfo={post} key={post.id}/>)}
        </div>
        <div className='btns'>
            <button onClick={() => changeSlide(-1)} className="changePageBtnLeft"></button>
            <button onClick={() => changeSlide(1)} className="changePageBtnRight"></button>
        </div>
    </div>
  )
}

export default SliderComponent