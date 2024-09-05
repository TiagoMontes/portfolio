"use client";

import { ReactNode } from "react";

type BtnScrollFaqProps = {
  children: ReactNode;
  className?: string;
  id: string;
};

export default function BtnScroll({
  children,
  id,
  className,
}: BtnScrollFaqProps) {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(`${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={`${className} px-4 py-2 duration-300 bg-black opacity-70 hover:bg-[rgb(22,22,22)] hover:opacity-100 rounded-lg`}
      onClick={() => handleClickScroll(id)}
    >
      {children}
    </button>
  );
}
