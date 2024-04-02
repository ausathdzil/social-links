import profile from "./assets/profile.jpg";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          className="rounded-full h-28 w-28"
          src={profile}
          alt="Ausath Abdi Dzil Ikram"
        />
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-xl font-bold ">Ausath Abdi Dzil Ikram</h1>
          <p className="text-base text-violet-400 font-bold">
            Jakarta, Indonesia
          </p>
        </div>
      </div>
      <p>&quot;Front-end Enthusiast 🤖&quot;</p>
    </>
  );
}
