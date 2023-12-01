import { FC, useState } from "react";
import blogItem1 from "../../assets/images/blogItem1.svg";
import blogItem2 from "../../assets/images/blogItem2.svg";
import blogItem3 from "../../assets/images/blogItem3.svg";

import searchIcon from "../../assets/icons/searchIcon.svg";
import adminIcon from "../../assets/icons/adminIcon.svg";
import calendarIcon from "../../assets/icons/calendarIcon.svg";
import tagIcon from "../../assets/icons/tagIcon.svg";
import { BlogType } from "../../types/BlogTypes";
import Pagination from "../reusable/PaginationComponent";
import AnimatedDiv from "../../animations/AnimatedDiv";

export const items: BlogType[] = [
  {
    id: "1",
    src: blogItem1,
    title: "Going all-in with millennial design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    category: "Wood",
    // date: "14 Oct 2022",
    date: new Date("14 Oct 2022"),
    user: "Admin",
    recent: true,
  },
  {
    id: "2",
    src: blogItem2,
    title: "Exploring new ways of decorating",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    category: "Handmade",
    date: new Date("14 Oct 2022"),
    user: "Admin",
    recent: true,
  },
  {
    id: "3",
    src: blogItem3,
    title: "Handmade pieces that took time to make",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    category: "Wood",
    date: new Date("14 Oct 2022"),
    user: "Admin",
    recent: true,
  },
  {
    id: "4",
    src: blogItem2,
    title: "Handmade pieces that took time to make",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    category: "Wood",
    date: new Date("14 Oct 2022"),
    user: "Admin",
    recent: true,
  },
  {
    id: "5",
    src: blogItem1,
    title: "Handmade pieces that took time to make",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    category: "Wood",
    date: new Date("14 Oct 2022"),
    user: "Admin",
    recent: true,
  },
];

const BlogLayout: FC = () => {
  const [page, setPage] = useState<number>(1);
  const pageSize = 3;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedItems = items.slice(startIndex, endIndex);

  return (
    <section className="container mx-auto pt-[50px] lg:pt-[100px] lg:px-9">
      <div className="container mx-auto pt-[50px] lg:pt-[50px] lg:px-9">
        <div className="block lg:hidden">
          {/* i show it on the small screens only */}
          <div className="flex items-center rounded-[10px] border px-2 mx-2 py-2 border-[#9F9F9F] mb-11">
            <input
              type="text"
              className="px-4 py-2 w-full outline-none"
              placeholder="Search..."
            />
            <button className="px-4">
              <img src={searchIcon} alt="Search Icon" />
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          {/* -----------------Left Section Container----------------- */}
          <div className="lg:col-span-2">
            {displayedItems.map((item) => (
              <div key={item.id} className="px-4 lg:px:0">
                <AnimatedDiv>
                  <img
                    src={item.src}
                    alt="Blog Post"
                    className="w-full h-auto "
                  />
                  <div className="flex items-center justify-between text-[#9F9F9F] py-2">
                    <div className="flex items-center space-x-2 pt-3 pb-6">
                      <img src={adminIcon} alt="Admin Icon" />
                      <span className="pr-2 lg:pr-8 font-Poppins text-xs lg:text-base">
                        {item.user}
                      </span>
                      <img src={calendarIcon} alt="Calendar Icon" />
                      <span className="pr-2 lg:pr-8 font-Poppins text-xs lg:text-base">
                        {item.date.toDateString()}
                      </span>
                      <img src={tagIcon} alt="Tag Icon" />
                      <span className="pr-2 lg:pr-8 font-Poppins text-xs lg:text-base">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  {/* -----------------Content----------------- */}
                  <div className="lg:pb-8">
                    <h2 className="text-3xl font-Poppins font-medium pb-3">
                      {item.title}
                    </h2>
                    <p className="font-Poppins text-[#9F9F9F] font-light text-base pb-4">
                      {item.description}
                    </p>
                    <button className="border-b border-black hover:text-[#B88E2F] outline-none text-base font-Poppins font-normal py-3 mb-[54px]">
                      Read more
                    </button>
                  </div>
                </AnimatedDiv>
              </div>
            ))}
          </div>

          {/* -----------------Right Section: Search and Categories----------------- */}
          <div className="lg:col-span-1 self-start px-4 lg:pl-8 sticky-sidebar overflow-y-auto">
            {/* -----------------Search Bar----------------- */}
            <div className="hidden lg:flex items-center rounded-[10px] border px-4 py-2 border-[#9F9F9F] overflow-hidden mb-11">
              <input
                type="text"
                className="px-4 py-2 w-full outline-none"
                placeholder="Search..."
              />
              <button className=" px-4">
                <img src={searchIcon} alt="Search Icon" />
              </button>
            </div>
            {/* -----------------Categories----------------------- */}
            <div className="mx-[34px] mb-28">
              <h3 className="text-2xl font-medium font-Poppins mb-8">
                Categories
              </h3>
              <ul className="space-y-8">
                <li className="flex justify-between font-Poppins text-base font-normal text-[#9F9F9F]">
                  <span>Crafts</span> <span>2</span>
                </li>
                <li className="flex justify-between font-Poppins text-base font-normal text-[#9F9F9F]">
                  <span>Design</span> <span>8</span>
                </li>
                <li className="flex justify-between font-Poppins text-base font-normal text-[#9F9F9F]">
                  <span>Handmade</span> <span>7</span>
                </li>
                <li className="flex justify-between font-Poppins text-base font-normal text-[#9F9F9F]">
                  <span>Interior</span> <span>1</span>
                </li>
                <li className="flex justify-between font-Poppins text-base font-normal text-[#9F9F9F]">
                  <span>Wood</span> <span>6</span>
                </li>
              </ul>
            </div>
            {/* -----------------Recent Posts----------------------- */}
            <div className="mx-[34px] mb-28 ">
              <h3 className="text-2xl font-medium font-Poppins mb-8">
                Recent Posts
              </h3>
              {items.map((item) => (
                <div className="flex items-center bg-white rounded-lg shadow-xs mb-10">
                  <div
                    className="flex-none rounded-lg overflow-hidden w-16 h-16"
                    style={{ minWidth: "64px" }}
                  >
                    <img
                      src={item.src}
                      alt="Notebook"
                      className="object-cover w-[80px] h-[80px]"
                    />
                  </div>
                  <div className="flex-grow ml-4 pr-8">
                    <p className="text-sm font-Poppins font-normal pb-2 ">
                      {item.title}
                    </p>
                    <p className="text-xs font-normal text-[#9F9F9F]">
                      {item.date.toDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={Math.ceil(items.length / pageSize)}
        />
      </div>
    </section>
  );
};

export default BlogLayout;
