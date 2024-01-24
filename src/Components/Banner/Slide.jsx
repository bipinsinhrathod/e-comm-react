import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "../Products/Product";


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = () => {
  return (
    <>

      <div className="flex justify-center items-center font-bold text-4xl p-8">
        <h1>New Arrivals</h1>
      </div>
      <div className="">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          transitionDuration={1600}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          autoPlay={true}
        >
          <div className="pl-[154px]">
            <Product />
          </div>
          {/* <div className="object-cover w-[100%] h-[100vh]"><img src="https://assets.ajio.com/medias/sys_master/root/20220826/R4NZ/630877f4f997dd394c2709aa/-473Wx593H-469180121-black-MODEL5.jpg" alt="" width={"500px"} height={"100px"} /></div>
          <div className="object-cover w-auto h-[100vh]"><img src="https://assets.ajio.com/medias/sys_master/root/20240104/6t1e/6596c4adddf779151902eb21/-473Wx593H-469584691-white-MODEL.jpg" alt=""  width={"500px"} height={"100px"}/></div>
          <div className="object-cover w-auto h-[100vh]"><img src="https://assets.ajio.com/medias/sys_master/root/20240104/6t1e/6596c4adddf779151902eb21/-473Wx593H-469584691-white-MODEL.jpg" alt=""  width={"500px"} height={"100px"}/></div>
          <div className="object-cover w-auto h-[100vh]"><img src="https://assets.ajio.com/medias/sys_master/root/20230922/meJJ/650d5826ddf7791519f3cbea/-473Wx593H-469534101-black-MODEL2.jpg" alt="" width={"500px"} height={"100px"} /></div> */}

        </Carousel>
        ;
      </div>
    </>
  );
};

export default Slide;
