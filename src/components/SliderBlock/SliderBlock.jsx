import React from 'react'
import postImg from "../../images/postImg.png"

const SliderBlock = ({postInfo}) => {
  return (
    <div className='sliderBlock'>
        <div className='postImage'>
          <img src={postImg} alt="postIMAGE" />
        </div>
        <div className='postText'>
          <h2>{postInfo.name}</h2>
          <p>{postInfo.discription}</p>
        </div>
        <button className='continueRead'>Читать дальше</button>
        {/* <h2>{currentBlock.name}</h2> */}
    </div>
  )
}

export default SliderBlock