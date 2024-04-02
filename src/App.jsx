import Profile from "./Profile";
import Socials from "./Socials";

export default function App() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen bg-neutral-950
      flex justify-center items-center text-white"
    >
      <div
        className="w-[80%] max-w-96 rounded-2xl bg-neutral-900 p-8 m-8 
        flex flex-col justify-center items-center gap-4"
      >
        <Profile />
        <Socials />
      </div>
    </div>
  );
}
