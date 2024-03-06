


import React from "react";
import Bipin from "../Assests/bipin.jpg";
import Tarang from "../Assests/Tarang.jpg";
import Maitri from "../Assests/maitri.jpg";

const ourTeam = [
  {
    id: 1,
    img: Bipin,
    name: "Bipinsinh Kishorsinh Rathod",
    Role: "CEO",
    email: "bipinrajput548@gmail.com",
  },
  {
    id: 2,
    img: Tarang,
    name: "Rohit tarang",
    Role: "Web Developer",
    email: "Kano5105@gmail.com",
  },
  {
    id: 3,
    img: Maitri,
    name: "Maitri Patel",
    Role: "Devloper",
    email: "milipatel0607@mail.com",
  },
];

export const OurTeamCard = ({ ourTeam }) => (
  <>
    <div className="  border border-[#D3D4D5] rounded-t-3xl w-auto h-auto transition-all duration-300 hover:shadow-2xl shadow-gray-200">
      <div className="w-[375px] overflow-hidden relative rounded-t-3xl ">
        <img
          className="object-cover h-[350px] hover:scale-105 transition-all duration-500 hover:rotate-1"
          width={"375px"}
          src={ourTeam.img}
          alt=""
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold m-4 text-2xl">{ourTeam.name}</h1>

        <hr className="bg-[#D3D4D5] h-[2px] w-[80%]" />

        <p className="font-semibold m-2 text-md">{ourTeam.Role}</p>

        <hr className="bg-[#D3D4D5] h-[2px] w-[80%]" />

        <p className="font-semibold m-2 text-md">{ourTeam.email}</p>
      </div>
    </div>
  </>
);

function Team() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10">
        {ourTeam.map((teamMember) => (
          <OurTeamCard key={teamMember.id} ourTeam={teamMember} />
        ))}
      </div>
    </>
  );
}

export default Team;

