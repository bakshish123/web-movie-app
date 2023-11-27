import React from "react";
import CardList1 from "../../../components/CardLists/CardList1";
import WatchNow from "../../../components/buttons/WatchNow";
import CardButton from "../../../components/buttons/CardButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { CardItem } from "../../../components/Cards/Card1";

const CardSection2 = () => {
  const cardStyle = {
    background: "linear-gradient(to left, #1c1917 95%, transparent 100%)",
  };
  const favoriteIds = useSelector(
    (state: RootState) => state.favorite.favorites
  );
  const cardArray: CardItem[] = useSelector(
    (state: RootState) => state.cardArray.arr
  );
  const trending = useSelector((state: RootState) => state.trending.display);

  const trendingCard: CardItem | undefined = cardArray[parseInt(trending) - 1];

  console.log("trending", trending);
  console.log(trendingCard);

  return (
    <div
      className="sm:w-[100vw] md:w-[75vw] sm:h-[180vh] lg:w-[85vw]"
      style={cardStyle}
    >
      <div className="">
        <CardList1 />
      </div>
      <div>
        <div className="text-white text-xl font-semibold font-['Poppins'] mt-[3rem]">
          <div className=" flex sm:flex-col">
            <div className="rounded-[20px] gap-4 m-4 flex sm:flex-col md:flex-col lg:flex-row items-center md:h-[100%] ml-[3vw]">
              <div className="md:w-[70vw] sm:w-[90vw] lg:w-[40vw]">
                <img
                  src={trendingCard?.url}
                  alt={trendingCard?.title}
                  className="object-cover rounded-[20px] lg:h-[45vh] lg:w-[35vw] ml=[3vw]"
                />
              </div>
              <div className="md:p-4 text-white sm:ml-[1rem] lg:w-[30rem]">
                <div className="flex flex-row justify-between">
                  <div className="text-white font-bold text-3xl font-['Poppins'] leading-normal">
                    {trendingCard?.title}
                  </div>
                  <div>{trendingCard?.ratings}</div>
                </div>
                <div>{trendingCard?.description}</div>
                <div className="text-white text-sm font-normal font-['Poppins'] leading-normal">
                  {trendingCard?.details}
                </div>
                <div className="flex flex-row mt-4">
                  <div>
                    <WatchNow />
                  </div>
                  <div className="ml-4">
                    <CardButton cardId="1" isBig={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection2;
