export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-black text-white">
      <div>
        <h1 className="font-serif font-bold text-5xl">
          Tiago Montes dos Santos
        </h1>
      </div>
      <section>
        <ul className="flex gap-4">
          <li>
            <button>About me</button>
          </li>
          <li>
            <button>Experiences</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </section>
    </div>
  );
}
