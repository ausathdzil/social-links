import "./index.css";
import profile from "./assets/profile.jpg";
import linkedinLogo from "./assets/linkedin.svg";
import githubLogo from "./assets/github.svg";
import instagramLogo from "./assets/instagram.svg";
import xLogo from "./assets/x-twitter.svg";

export default function App() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen bg-neutral-950
      flex justify-center items-center text-white"
    >
      <div className="w-[80%] max-w-96 rounded-2xl bg-neutral-900 p-8 m-8 flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            className="rounded-full h-28 w-28"
            src={profile}
            alt="Ausath Abdi Dzil Ikram"
          />
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-xl font-bold ">Ausath Abdi Dzil Ikram</h1>
            <p className="text-base text-violet-400 font-bold">Jakarta, Indonesia</p>
          </div>
        </div>
        <p>&quot;Front-end Enthusiast 🤖&quot;</p>
        <div className="grid grid-cols-2 gap-4 text-center w-full">
          <a
            className="w-full rounded-2xl bg-violet-50 flex flex-col justify-center items-center p-4 hover:scale-105 hover:bg-violet-200 transition-transform duration-300 ease-in-out"
            href="https://linkedin.com/in/ausathdzil"
            target="_blank"
          >
            <img className="w-8 h-8" src={linkedinLogo} alt="LinkedIn logo" />
            <p className="text-black text-sm">LinkedIn</p>
          </a>
          <a
            className="w-full rounded-2xl bg-violet-50 flex flex-col justify-center items-center p-4 hover:scale-105 hover:bg-violet-200 duration-300 ease-in-out"
            href="https://github.com/ausathdzil"
            target="_blank"
          >
            <img className="w-8 h-8" src={githubLogo} alt="GitHub logo" />
            <p className="text-black text-sm">GitHub</p>
          </a>
          <a
            className="w-full rounded-2xl bg-violet-50 flex flex-col justify-center items-center p-4 hover:scale-105 hover:bg-violet-200 duration-300 ease-in-out"
            href="https://instagram.com/ausathdzil"
            target="_blank"
          >
            <img className="w-8 h-8" src={instagramLogo} alt="Instagram logo" />
            <p className="text-black text-sm">Instagram</p>
          </a>
          <a
            className="w-full rounded-2xl bg-violet-50 flex flex-col justify-center items-center p-4 hover:scale-105 hover:bg-violet-200 duration-300 ease-in-out"
            href="https://x.com/ausathdzil"
            target="_blank"
          >
            <img className="w-8 h-8" src={xLogo} alt="X logo" />
            <p className="text-black text-sm">X/Twitter</p>
          </a>
        </div>
      </div>
    </div>
  );
}
