"use client"

export default function Capsula(props:any) {
    console.log(props);
    return(
        <div>{props.number}. {props.text}</div>
    )
}