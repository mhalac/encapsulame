"use client";
import { useRouter, usePathname } from "next/navigation";

export default function NavDash(props: any) {
  const router = useRouter();

  function goto() {
    router.push(props.direction);
  }
  let base = "";
  console.log(usePathname(), props.direction);

  if (usePathname() == props.direction) {
    base += "underline";
  } else {
    base += "hover:-translate-y-[.4vh]";
  }
  if (props.direction) {
    return (
      <div>
        <button
          className={
            base +
            " transition min-[4vh] h-[5vh] w-[2cm] text-sm min-w-[7vw] glowing-nav text-left flex flex-row items-center text-black max-w-screen-lg rounded-md"
          }
          onClick={goto}
        >
          {props.icon}

          {props.title}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          className={
            base +
            " transition min-[4vh] h-[5vh] w-[2cm] text-sm min-w-[7vw] glowing-nav text-left flex flex-row items-center text-slate-200 max-w-screen-lg rounded-md"
          }
          onClick={props.callback}
        >
          {props.icon}

          {props.title}
        </button>
      </div>
    );
  }
}
