const headerImg = "/images/header.jpg";
export default function HomeHeader() {
  return (
    <header className="mt-4 flex flex-col space-y-6 px-32 pb-16 pt-28 text-black">
      <div className="flex flex-col items-center space-y-2 self-center text-5xl font-semibold">
        <h1>Your Next Big Opportunity</h1>
        <h1>Awaits</h1>
      </div>
      <section className="grid place-items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={headerImg} alt="Header" className="w-[500px]" />
      </section>
    </header>
  );
}
