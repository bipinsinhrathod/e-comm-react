import React from 'react'

const product = [
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

    }
]



export const ProductCard = ({ product }) => (

    
    

    <div className='border  border-[#D3D4D5] w-auto h-auto transition-all duration-300 hover:shadow-2xl shadow-gray-200'>
        <div className='w-[375px] overflow-hidden relative '>
        <div id="clickFade" className='absolute bg-[rgba(0, 0, 0, 0.5) ml-14 my-32 opacity-0 hover:opacity-100 z-10'>
            <button className='font-semibold w-64 h-12 bg-black text-white hover:bg-white hover:text-black transition-all mb-4 duration-300'>Add to Cart</button>
            <button className='font-semibold w-64 h-12 bg-black text-white hover:bg-white hover:text-black transition-all duration-300'>Buy Now</button>
        </div>
            <img  className='object-cover h-[350px] hover:opacity-70 hover:scale-105 transition-all duration-500'  width={"375px"}   src={product.imgUrl} alt="" />
        </div>

        <div className='flex flex-col justify-center items-center '>
            <h1 className='font-bold m-4 text-2xl'>{product.pTitle}</h1>

            <hr className='bg-[#D3D4D5] h-[2px] w-[80%] ' />

            <p className='font-semibold m-2 text-md'>{product.lTitle}</p>
        </div>
    </div>
);



function Product() {
    
    return (
        <>

            <div className='flex gap-10'>
                {product.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default Product



