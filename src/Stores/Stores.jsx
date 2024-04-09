import React from "react";

import s1 from "../Assests/store1.jpg";
import s2 from "../Assests/store3.jpg";
import s3 from "../Assests/store2.jpg";
import s4 from "../Assests/store4.jpg";

const stor = [
  {
    id: 1,
    imgUrl: s1,
    city: "Ahmedabad",
  },
  {
    id: 2,
    imgUrl: s2,
    city: "Mumbai",
  },
  {
    id: 3,
    imgUrl: s3,
    city: "Thara",
  },
  {
    id: 4,
    imgUrl: s4,
    city: "Delhi",
  },
];

const Stores = () => {
  return (
    <section className="grid grid-cols-4 p-5 gap-4 max-md:grid-cols-2 ">
      {stor.map((item) => {
        return (
          <div className="relative" >
            <img className="object-cover h-full" src={item.imgUrl} alt="" />
            <p className="text-center font-semibold rounded-md absolute bottom-4 left-4 bg-white  p-1 max-md:text-sm max-sm:text-xs">{item.city}</p>

          </div>
        );
      })}

      {/* <div className="">
        <img src={s2} alt="" />
      </div>

      <div>
        <img src={s3} alt="" />
      </div>

      <div>
        <img src={s4} alt="" />
      </div> */}
    </section>
  );
};

export default Stores;
