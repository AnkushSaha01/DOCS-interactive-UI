import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 overflow-hidden"
    >
      <IoDocumentTextOutline />
      <p className="text-sm font-regular leading-tight mt-5">{data.desc}</p>
      <div className=" footer absolute bottom-0 w-full h-22 left-0 ">
        <div className="flex items-center justify-between py-3 px-8 mb-2">
          <h5 className="text-[13px]">{data.fileSize}</h5>
          <span className="w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <AiOutlineDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "sky" ? "bg-sky-500" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-regular">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
