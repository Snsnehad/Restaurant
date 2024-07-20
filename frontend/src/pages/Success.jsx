import React, { useEffect, useState } from "react";
import {
  HiOutlineArrowCircleDown,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeOutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeOutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeOutId);
  });

  return(
    <>
      <section className="notFound">
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1>Redirecting To Home In {countdown} Seconds....</h1>
          <Link to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />{" "}
          </Link>
        </div>
      </section>
    </>
  )  
};

export default Success;
