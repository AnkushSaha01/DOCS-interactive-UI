import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Yeh le Behen ke lawre tu bhi kya yaad rakhega.....",
      fileSize: "900.53 mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Yeh le Behen ke lawre tu bhi kya yaad rakhega.....",
      fileSize: "900.53 mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "sky" },
    },
    {
      desc: "Yeh le Behen ke lawre tu bhi kya yaad rakhega.....",
      fileSize: "900.53 mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 p-5 flex-wrap"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
