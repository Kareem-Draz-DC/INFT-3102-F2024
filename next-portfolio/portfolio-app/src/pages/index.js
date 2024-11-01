import { useEffect, useState } from "react";


export default function Home() {


  const [name, setName] = useState("Sample")


  useEffect(() => {
    console.log("hello")
  }, []);


  return (
    <>
      <h1>GhostCMS Sample</h1>
      <h1>{name}</h1>
    </>
  );
}
