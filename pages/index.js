import { Inter } from "next/font/google";
import Welcome from '../components/Welcome'
import Gallery from "@/components/Gallery";
import Collage from "@/components/Collage";
import Branches from "@/components/Branches";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Welcome />
      <Gallery />
      {/* <Most header={'Popular'}/>
      <Most header={'Ordered'}/> */}
      <Collage />
      <Branches />
    </>            
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
//   const data = await res.json()

//   return { props: { data } }
// }