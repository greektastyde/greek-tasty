'use client';
import {useEffect} from "react";
import Image from "next/image";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function MenuPage() {
  useEffect(() => {
    fetch('/api/menu').then(res => {
      res.json().then(menupage => setMenuPage(menupage))
    });
  }, []);
  return (
    <section className="mt-8 text-center">

      <div className="grid mt-8 sm:grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">IMBISS</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/imbiss.png'} className="max-h-auto block mx-auto" alt="Imbiss"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">GYROS</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/gyros.png'} className="max-h-auto block mx-auto" alt="Gyros"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">Pita Gerollt</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/pita.png'} className="max-h-auto block mx-auto" alt="Pita Gerollt"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">Burger</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/burger.png'} className="max-h-auto block mx-auto" alt="Burger"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">Schnitzel</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/schnitzel.png'} className="max-h-auto block mx-auto" alt="Schnitzel"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">Grill</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/grill.png'} className="max-h-auto block mx-auto" alt="Grill"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">Pizza</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/pizza.png'} className="max-h-auto block mx-auto" alt="Pizza"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">Salate & Saucen</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/salat_sauce.png'} className="max-h-auto block mx-auto" alt="Salate & Saucen"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">Kalte Getranke</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/drinks.png'} className="max-h-auto block mx-auto" alt="Kalte Getranke"/>
              </div>
          </div>
        </div>
        
    </section>
  );
}
