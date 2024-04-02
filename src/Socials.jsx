import linkedinLogo from "./assets/linkedin.svg";
import githubLogo from "./assets/github.svg";
import instagramLogo from "./assets/instagram.svg";
import xLogo from "./assets/x-twitter.svg";

export default function Socials() {
  return (
    <div className="grid grid-cols-2 gap-4 text-center w-full">
      <a
        className="w-full rounded-2xl bg-violet-50 p-4 
        flex flex-col justify-center items-center 
        hover:scale-105 hover:bg-violet-200 transition-transform duration-300 ease-in-out"
        href="https://linkedin.com/in/ausathdzil"
        target="_blank"
      >
        <img className="w-8 h-8" src={linkedinLogo} alt="LinkedIn logo" />
        <p className="text-black text-sm">LinkedIn</p>
      </a>
      <a
        className="w-full rounded-2xl bg-violet-50 p-4 
        flex flex-col justify-center items-center 
        hover:scale-105 hover:bg-violet-200 duration-300 ease-in-out"
        href="https://github.com/ausathdzil"
        target="_blank"
      >
        <img className="w-8 h-8" src={githubLogo} alt="GitHub logo" />
        <p className="text-black text-sm">GitHub</p>
      </a>
      <a
        className="w-full rounded-2xl bg-violet-50 p-4 
        flex flex-col justify-center items-center 
        hover:scale-105 hover:bg-violet-200 duration-300 ease-in-out"
        href="https://instagram.com/ausathdzil"
        target="_blank"
      >
        <img className="w-8 h-8" src={instagramLogo} alt="Instagram logo" />
        <p className="text-black text-sm">Instagram</p>
      </a>
      <a
        className="w-full rounded-2xl bg-violet-50 p-4 
        flex flex-col justify-center items-center 
        hover:scale-105 hover:bg-violet-200 duration-300 ease-in-out"
        href="https://x.com/ausathdzil"
        target="_blank"
      >
        <img className="w-8 h-8" src={xLogo} alt="X logo" />
        <p className="text-black text-sm">X/Twitter</p>
      </a>
    </div>
  );
}
