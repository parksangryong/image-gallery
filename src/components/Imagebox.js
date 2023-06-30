import '../css/Imagebox.css'
import prev from '../images/prev.svg'
import next from '../images/next.svg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Imagebox(props){

    const clickImg = (e) => {
        console.log(e.target.alt);
        props.clickImg(e.target.alt)
    }
    const settings = {  
        initialSlide: 0,
        nextArrow: (<div id='next'><img src={next} alt='next' /></div>),
        prevArrow: (<div id='prev'><img src={prev} alt='prev' /></div>),
        dots: false,  // 슬라이드 밑에 점 보이게
        infinite: true,  // 무한으로 반복
        slidesToShow : 4,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,  // 넘어가는 속도
        slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
        centerMode: true,
        centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    }
    const result = props.imageList.map(
        (data,index) => (<div key={data} id='my-slide-element'><img onClick={clickImg} src={URL.createObjectURL(data)} alt={index} /></div>)
      )

    if(props.imageList){
        return(
            <ul id='imagebox'>
                
            <Slider {...settings}>
            {result}
            </Slider>
            </ul>

           
        ) 
    }
    else{
        return(
            <ul id='imagebox'>
                
            </ul>
        ) 
    }
}

export default Imagebox