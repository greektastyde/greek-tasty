
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
      <div className="md:ml-12 relative">
        <div className="md:block bg-gray-200 p-4 rounded-lg hover:shadow-md hover:shadow-black/25 ">
          <Image src={'/gttk.PNG'} width={500} height={300} alt={'Greek Tasty Treuer Kunde'} />
        </div>
        <div className="absolute inset-0  items-center justify-center p-6">
          <p className="text-white text-center text-lg font-semibold bg-black/50 p-4 rounded-lg">
            Bestellen Sie über unsere Website oder telefonisch und sammeln Sie 10 Stempel. 
            Bei Ihrer nächsten Bestellung schenken wir Ihnen ein Wunschmenü. Nicht verpassen!
          </p>
        </div>
      </div>
    </section>
  );
}
