"use client";

import BtnScroll from "@/components/BtnScroll";

export default function Header() {
  return (
    <header className="fixed top-0 mb-10 w-full bg-black z-10">
      <ul className="flex gap-6 lg:flex-row items-center p-2 justify-center border-b border-[rgb(66,66,66)]">
        <li>
          <BtnScroll id="index">
            <div className="h-6 w-6 rounded-full border-2 border-white"></div>
          </BtnScroll>
        </li>

        <div className="lg:flex lg:gap-2 grid grid-cols-2">
          <li>
            <BtnScroll id="about-me">About me</BtnScroll>
          </li>
          <li>
            <BtnScroll id="skills">Skills</BtnScroll>
          </li>
          <li>
            <BtnScroll id="experiences">Experiences</BtnScroll>
          </li>
          <li>
            <BtnScroll id="contact">Contact</BtnScroll>
          </li>
        </div>
      </ul>
    </header>
  );
}
