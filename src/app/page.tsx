import Footer from "@/components/Footer";
import BtnScroll from "@/components/BtnScroll";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white gap-8 ">
      <header className="fixed top-0 w-full z-10">
        <ul className="flex gap-2 flex-col lg:flex-row p-2 border-b border-[rgb(66,66,66)]">
          <li>
            <BtnScroll id="index">Me</BtnScroll>
          </li>
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
        </ul>
      </header>

      <main className="flex flex-col gap-32 px-6">
        <section
          id="index"
          className="flex flex-col justify-center items-center gap-4 h-screen"
        >
          <h1 className="text-2xl font-serif font-bold lg:text-5xl">
            Tiago Montes dos Santos
          </h1>
        </section>

        <section id="about-me" className="flex flex-col h-screen pt-6">
          <h1 className="font-bold font-serif text-2xl">About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            placerat lacus vel magna sodales, id convallis augue rutrum. Nunc
            euismod laoreet sapien eget mattis. Nulla eget enim lectus. Praesent
            eu elit nibh. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Phasellus dictum mi a
            blandit hendrerit. Nunc eu finibus mauris. Aliquam eleifend placerat
            cursus. Aenean scelerisque varius nulla, et pellentesque dui
            imperdiet eu. Mauris nec ultricies urna. Proin rhoncus feugiat enim
            imperdiet cursus. Quisque ultricies augue hendrerit, laoreet enim
            vulputate, auctor nunc. Cras pulvinar eros a ante iaculis egestas.
            Cras nec est ac ligula suscipit varius. Maecenas ultricies cursus
            turpis vitae pulvinar. Morbi sagittis tellus in lobortis iaculis.
            Quisque pretium nec dui in varius.
          </p>
        </section>

        <section id="skills" className="flex flex-col h-screen pt-6">
          <h1 className="font-bold font-serif text-2xl">Skills</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            placerat lacus vel magna sodales, id convallis augue rutrum. Nunc
            euismod laoreet sapien eget mattis. Nulla eget enim lectus. Praesent
            eu elit nibh. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Phasellus dictum mi a
            blandit hendrerit. Nunc eu finibus mauris. Aliquam eleifend placerat
            cursus. Aenean scelerisque varius nulla, et pellentesque dui
            imperdiet eu. Mauris nec ultricies urna. Proin rhoncus feugiat enim
            imperdiet cursus. Quisque ultricies augue hendrerit, laoreet enim
            vulputate, auctor nunc. Cras pulvinar eros a ante iaculis egestas.
            Cras nec est ac ligula suscipit varius. Maecenas ultricies cursus
            turpis vitae pulvinar. Morbi sagittis tellus in lobortis iaculis.
            Quisque pretium nec dui in varius.
          </p>
        </section>

        <section id="experiences" className="flex flex-col h-screen pt-6">
          <h1 className="font-bold font-serif text-2xl">Experiences</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            placerat lacus vel magna sodales, id convallis augue rutrum. Nunc
            euismod laoreet sapien eget mattis. Nulla eget enim lectus. Praesent
            eu elit nibh. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Phasellus dictum mi a
            blandit hendrerit. Nunc eu finibus mauris. Aliquam eleifend placerat
            cursus. Aenean scelerisque varius nulla, et pellentesque dui
            imperdiet eu. Mauris nec ultricies urna. Proin rhoncus feugiat enim
            imperdiet cursus. Quisque ultricies augue hendrerit, laoreet enim
            vulputate, auctor nunc. Cras pulvinar eros a ante iaculis egestas.
            Cras nec est ac ligula suscipit varius. Maecenas ultricies cursus
            turpis vitae pulvinar. Morbi sagittis tellus in lobortis iaculis.
            Quisque pretium nec dui in varius.
          </p>
        </section>

        <section id="contact" className="flex flex-col pt-6">
          <h1 className="font-bold font-serif text-2xl">Contact</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            placerat lacus vel magna sodales, id convallis augue rutrum. Nunc
            euismod laoreet sapien eget mattis. Nulla eget enim lectus. Praesent
            eu elit nibh. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Phasellus dictum mi a
            blandit hendrerit. Nunc eu finibus mauris. Aliquam eleifend placerat
            cursus. Aenean scelerisque varius nulla, et pellentesque dui
            imperdiet eu. Mauris nec ultricies urna. Proin rhoncus feugiat enim
            imperdiet cursus. Quisque ultricies augue hendrerit, laoreet enim
            vulputate, auctor nunc. Cras pulvinar eros a ante iaculis egestas.
            Cras nec est ac ligula suscipit varius. Maecenas ultricies cursus
            turpis vitae pulvinar. Morbi sagittis tellus in lobortis iaculis.
            Quisque pretium nec dui in varius.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
