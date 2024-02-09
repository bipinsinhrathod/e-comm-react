import React from 'react'
import Slider from "react-slick"; 
// import "~slick-carousel/slick/slick.css";

function Sliders  () {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4};
  return (
    <>
      <div className='w-3/5 m-auto'>

      <div  className='mt-10 '>
      <Slider {...settings}>
        {data.map((d) => (

            <div className=' border '>
                <div className=''>
                    <img src={d.imgUrl} alt="" />
                </div>

                <div className='flex justify-center items-center flex-col'>
                    <p>{d.pTitle}</p>
                    <p>{d.lTitle}</p>
                </div>

                <div></div>
                
            </div>

        ) )}
        </Slider>
      </div>

      </div>
    </>
  )
}

const data = [
    {
        id: 1,
        imgUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/q/r/j/8-977419110012l908-42-xtep-moon-grey-foggy-grey-original-imagv4ff3dwfbkqd.jpeg?q=70",
        pTitle: "X-Tep",
        lTitle: "Running Shoes For Men  (Grey)"

    },
    {
        id: 2,
        imgUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/0/v/8-9774191100126435-42-xtep-black-canvas-white-original-imagv4ffjhtttgcd.jpeg?q=70",
        pTitle: "X-Tep",
        lTitle: "Running Shoes For Men  (Black)"

    },
    {
        id: 3,
        imgUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/k/p/7/8-877319110019i545-42-xtep-white-lagoon-green-original-imagv42kawaw8hmz.jpeg?q=70",
        pTitle: "X-Tep",
        lTitle: "Running Shoes For Men  (White)"

    },
    {
        id: 4,
        imgUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/0/v/8-9774191100126435-42-xtep-black-canvas-white-original-imagv4ffjhtttgcd.jpeg?q=70",
        pTitle: "X-Tep",
        lTitle: "Running Shoes For Men  (Black)"

    }
]



export default Sliders
