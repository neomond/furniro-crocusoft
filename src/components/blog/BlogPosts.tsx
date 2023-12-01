import { FC } from "react";
import noteImage from "../../assets/images/blogImg.svg";

const BlogPost: FC = () => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
      <div
        className="flex-none rounded-lg overflow-hidden w-16 h-16"
        style={{ minWidth: "64px" }}
      >
        <img
          src={noteImage}
          alt="Notebook"
          className="object-cover w-[80px] h-[80px]"
        />
      </div>
      <div className="flex-grow ml-4">
        <p className="text-sm font-Poppins font-normal pb-2">
          Going all-in with millennial design
        </p>
        <p className="text-xs font-normal text-[#9F9F9F]">03 Aug 2022</p>
      </div>
    </div>
  );
};

export default BlogPost;
