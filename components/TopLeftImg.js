import Image from "next/image";


const TopLeftImg = () => {
  return (
<div className="absolute left-0 top-0 mix-blend-lighten z-10 w-[250px] md:w-[450px] opacity-80">
    <Image src='/top-left-img.png'  width={400} height={400}/>
  </div>
  )
  
}

export default TopLeftImg;
