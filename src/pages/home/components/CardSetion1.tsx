import React from "react";
import CardList1 from "../../../components/CardLists/CardList1";
import CardList2 from "../../../components/CardLists/CardList2";

const CardSection1 = () => {
  const cardStyle = {
    background: "linear-gradient(to left, #1c1917 95%, transparent 100%)",
  };

  console.log("CARD SECTION");
  return (
    <div
      className="flex flex-col gap-10 md:w-[79vw] sm:w-[100vw] lg:w-[85vw]"
      style={cardStyle}
    >
      <CardList1 />
      <CardList2 />
    </div>
  );
};

export default CardSection1;
