import { Inter } from "next/font/google";
import Welcome from '../components/Welcome'
import Gallery from "@/components/Gallery";
import Collage from "@/components/Collage";
import Branches from "@/components/Branches";


export default function Home() {

  return (
    <>
      <Welcome />
      <Gallery />
      <Collage />
      <Branches />
    </>            
  );
}