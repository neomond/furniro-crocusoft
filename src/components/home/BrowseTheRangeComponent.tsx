import { FC } from "react";
import image1 from "../../assets/images/image1.svg";
import image2 from "../../assets/images/image2.svg";
import image3 from "../../assets/images/image3.svg";
import { BrowseTheRange } from "../../types/BrowseTheRangeTypes";
import AnimatedDiv from "../../animations/AnimatedDiv";

const items: BrowseTheRange[] = [
  { id: "1", src: image1, label: "Dining" },
  { id: "2", src: image2, label: "Living" },
  { id: "3", src: image3, label: "Bedroom" },
];

const BrowseTheRangeComponent: FC = () => {
  return (
    <section className="max-w-[1290px] mx-auto py-[48px] text-center flex flex-col items-center n">
      <div className="pb-[48px]">
        <p className="flex items-center justify-center text-[32px] font-bold">
          Browse The Range
        </p>
        <p className="text-[20px] font-normal text-[#666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3">
        {items.length > 0 ? (
          items.map((item) => (
            <figure key={item.id}>
              <AnimatedDiv>
                <img
                  className="rounded-lg mb-[20px]"
                  src={item.src}
                  alt={`${item.label} room`}
                />
              </AnimatedDiv>
              <figcaption className="text-[24px] font-semibold">
                {item.label}
              </figcaption>
            </figure>
          ))
        ) : (
          <p>No items to display</p>
        )}
      </div>
    </section>
  );
};

export default BrowseTheRangeComponent;
