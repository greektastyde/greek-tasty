
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-8 relative">
        <h2 className="text-5xl neucha ">
        Eine Reise in die Schätze der griechischen <span></span>
          <span className="text-primary neucha">
          Küche!
          </span>
        </h2>
        <p className="my-6 text-graylight text-justify">
        Sie möchten nicht ausgehen? Dank unseres Mitrahmenservices können Sie unsere köstlichen Gerichte zu Hause genießen.
        </p>
        <div className="flex gap-4 text-sm ">
          <button className="flex bg-primary uppercase items-center text-white rounded inknut">
            <a 
              href='https://greek-tasty.order.app.hd.digital/menus' target="_blank"> 
              Jetzt bestellen
              </a>
            
          </button>
          <button className="flex bg-primary uppercase items-center text-white rounded inknut">
            <a 
              href='tel:+4923522688115'> 
              Jetzt anrufen
              </a>
            
          </button>
       
        </div>
      </div>
      <div className="ml-12">
      <div className=" hidden md:block bg-gray-200 p-4 rounded-lg hover:shadow-md hover:shadow-black/25 ">
        <Image src={'/food.jpg'} width={500} height={500} alt={'pizza'} />
      </div>
      </div>
    </section>
  );
}