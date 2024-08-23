"use client"

export default function Capsula(props: any) {
  const open_date = new Date(props.unblock_date);
  function ViewText() {
      
  }
  //bloqueado
  if(new Date() < open_date){
    
    const time_until = open_date.getTime() - new Date().getTime();

    console.log(time_until)

    const days = Math.floor(time_until / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time_until % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time_until % (1000 * 60 * 60)) / (1000 * 60));
    return(
      <div className="w-[16vw] h-[32vh] cursor-pointer  zig-zag-capsule items-center flex flex-col bg-gradient-to-b bg-black hover:capsule-hover rounded-t-[2vh]">
        <h1 className="text-2xl w-full mt-3 text-white  text-center">{props.number}. {props.text}</h1>
        <div className="w-[10vw] h-[.5vh] rounded-full mt-3 bg-black" ></div>
        <h1 className="text-xl text-center m-10">SE DESBLOQUEARA EN {days} DIAS, {hours} HORAS Y {minutes} MINUTOS</h1>
      </div>
    )

  }else{ //no bloqueado

    
    return (
      
      <div className="w-[16vw] h-[32vh] cursor-pointer  zig-zag-capsule items-center flex flex-col bg-gradient-to-b from-indigo-700 from-5%  to-purple-600 to-100% hover:capsule-hover rounded-t-[2vh]" onClick={ViewText}>
        <h1 className="text-2xl w-full mt-3 text-white  text-center">{props.number}. {props.text}</h1>
        <div className="w-[10vw] h-[.5vh] rounded-full mt-3 bg-black" ></div>
        <h1 className="text-4xl text-center m-10">VISUALIZAR</h1>

      </div>
    );
  }


}
