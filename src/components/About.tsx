"use client";

export default function About() {
  return (
    <section id="about-me" className="flex flex-col h-screen lg:pt-6 pt-16">
      <h1 className="font-bold font-serif text-2xl pt-12 pb-2">About me</h1>
      <p className="w-1/3 flex flex-col gap-2">
        <span>
          Hey! My name is Tiago, I'm 25 and from Acre. I'm really into tech and
          always looking to improve my skills. I prefer Back-End development ,
          but I've worked as a Fullstack developer too.
        </span>
        <span>
          Right now, I'm doing an MBA in FullCycle, focusing on Software
          Architecture, Solution Architecture, and DevOps. A few fun facts about
          me: I'm obsessed with Norway, so I can speak Norwegian, and I dream of
          moving there someday. Also, I'm a huge cat lover—I have quite a few!
        </span>
        <span>
          I used to work as a developer at the Secretary of Tourism, where I
          first got into programming with the help of a colleague who worked for
          Stone. I had a year-long mentorship with him. After that, I started
          working at Stay Charlie, a proptech that grew rapidly thanks to its
          technological innovation in the hotel industry.
        </span>
        <span>
          I've also done some freelance work developing small software projects
          for forest monitoring and indigenous assistance.
        </span>
      </p>
    </section>
  );
}
