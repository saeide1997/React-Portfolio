import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { Email } from "@material-ui/icons";
import "./style.css";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={
        "tran w-[100%] h-[70px] top-0 z-20 bg-white text-violet-950 fixed " +
        (menuOpen && "active")
      }
    >
      <div className="px-7 py-3 flex items-center justify-between">
        
        <div className="">
          <div
            className="hamburger w-9 h-7 flex flex-col justify-between cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className="origin-right w-[100%] h-1 bg-violet-950 "
              style={{ transition: "all 1s ease" }}
            ></span>
            <span
              className="origin-right w-[100%] h-1 bg-violet-950"
              style={{ transition: "all 1s ease" }}
            ></span>
            <span
              className="origin-right w-[100%] h-1 bg-violet-950"
              style={{ transition: "all 1s ease" }}
            ></span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center ml-8 max-[640px]:hidden">
            <span>09144839748</span>
            <PersonIcon className=" ml-2" />
          </div>
          <div className="flex items-center ml-8 max-[640px]:hidden">
            <span>Saeiide.tm@gmail.com</span>
            <Email className="ml-2" />
          </div>
          <a className="text-[40px] ml-7" href="#Intro">
            .SOHO
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
