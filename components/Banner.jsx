import Image from "next/image"

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg-h[500px] xl-h[600px] 2xl-h[700px]">
        <Image
            src="/images/banner.jpg"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
        />
        <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm sm:text-lg">Réserver votre prochain rendez-vous pour un tatouage en ligne.</p>
            <button className="text-blue-900 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 ">Juste ici</button>
        </div>
    </div>
  )
}

export default Banner