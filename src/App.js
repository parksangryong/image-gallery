import './App.css';
import Imagebox from './components/Imagebox';
import { FileUploader } from "react-drag-drop-files";
import { useState, useRef } from 'react';
import Slider from 'react-slick'
import './css/Imageslider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from './images/next.svg'
import prev from './images/prev.svg'

const fileTypes = ["JPG", "PNG", "GIF"];

function App() {
  const [imageList, setImageList] = useState([]);
  //이미지 리스트 상태 추가

  const sliderRef = useRef();
  const clickImg = (index) => {
    sliderRef.current.slickGoTo(index);
  }

  const handleChange = (file) => {
    let tempImagelist = [...imageList];
    for (let i = 0; i < file.length; i++) {
      tempImagelist.push(file[i]);
    }
    setImageList(tempImagelist)
    //console.log(tempImagelist)
  };
  // 핸들러 : 사진 넣으면 추가

  const settings = {  
    initialSlide: 0,
    nextArrow: (<div id='next'><img src={next} alt='next' /></div>),
    prevArrow: (<div id='prev'><img src={prev} alt='prev' /></div>),
    dots: false,  // 슬라이드 밑에 점 보이게
    infinite: true,  // 무한으로 반복
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,  // 넘어가는 속도
    slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    focusOnSelect: false
}

const result = imageList.map(
  (data) => (<div key={data} id='my-slide-element'><img src={URL.createObjectURL(data)} alt={data} /></div>)
)

const txt = imageList.length;

if(imageList){
  return(
    <div id="App">
    <div id='imageslider'>
        <Slider {...settings} ref={sliderRef} >
        {result}
        </Slider>
        <div id='txt'>현재 : {txt}개</div>
    </div>

    <Imagebox imageList={imageList} clickImg={clickImg} />

    <FileUploader handleChange={handleChange} 
      name="file" types={fileTypes} multiple={true}
      hoverTitle="주세요!">
      <button type="button" className='btn'>
        +
      </button>
    </FileUploader>
  </div>
  ) 
}
else{
  return(
    <div id="App">
    <div id='imageslider'>
        
    </div>

    <Imagebox imageList={imageList} clickImg={clickImg} />

    <FileUploader handleChange={handleChange} 
      name="file" types={fileTypes} multiple={true}
      hoverTitle="주세요!">
      <button type="button" className='btn'>
        + 
      </button>
    </FileUploader>
  </div>
  ) 
}
}

export default App