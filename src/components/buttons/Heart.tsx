import React, { useState } from "react";
import heart1 from "../../assets/svg/heart (1).svg";
import heart2 from "../../assets/svg/heart(2).svg";

const Heart = () => {
  const [isHearted, setHearted] = useState(false);

  const handleHeartClick = () => {
    setHearted(!isHearted);
  };
  return (
    <div className="h-[20rem]">
      <button onClick={handleHeartClick}>
        <div className="w-[54px] h-[54px] p-[15px] bg-gradient-to-r from-white to-white rounded-[14px] border border-white backdrop-blur-[20px] justify-start items-start gap-2.5 inline-flex">
          <div className="w-6 h-6">
            <img src={isHearted ? heart2 : heart1} alt="Heart Icon" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Heart;
