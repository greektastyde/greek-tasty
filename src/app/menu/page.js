'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import SectionHeaders from "@/components/layout/SectionHeaders";
import ProductModal from '@/components/ProductModal';


const menuData = {
  imbiss: {
    // title: "IMBISS",
    images: [
      { src: "/pommes.png", alt: "Imbiss", caption: "Große/Kleine Pommes" },
      { src: "/wbfk.png", alt: "Imbiss", caption: "Imbiss" }
    ]
    // description: "Unsere Imbiss-Spezialitäten werden frisch zubereitet und sind perfekt für einen schnellen, leckeren Snack.",
    // items: [
    //   { name: "Pommes ", price: "€3.50" },
    //   { name: "Currywurst", price: "€4.50" },
    //   { name: "Bratwurst", price: "€4.00" }
    // ]
  },
  gyros: {
    images: [
      { src: "/food_1.png", alt: "Gyros", caption: "Gyros Komplet" },
      { src: "/gyros_metaxa.png", alt: "Gyros", caption: "Metaxa Gyros Überbacken" },
      { src: "/gyros_spezial.png", alt: "Gyros", caption: "Gyros Spezial" },
      { src: "/gpga.png", alt: "Gyros", caption: "Gyros Pita Griechische Art" },
      { src: "/wbfk.png", alt: "Gyros" }
    ]
  },
  pita: {
    images: [
      { src: "/club_gyros.png", alt: "Pita Gerollt", caption: "Club Gyros" },
      { src: "/wbfk.png", alt: "Pita Gerollt" }
    ]
  },
  burger: {
    images: [
      { src: "/nkb.png", alt: "Burger"}
      // { src: "/burger.png", alt: "Burger", caption: "Burger" }
    ]
  },
  schnitzel: {
    images: [
      { src: "/schnitzel-holla.png", alt: "Schnitzel", caption: "Käse-Hollandaise" },
      { src: "/schnitzel-metaxa.png", alt: "Schnitzel", caption: "Käse-Metaxa" },
      { src: "/wbfk.png", alt: "Schnitzel" }
    ]
  },
  grill: {
    images: [
      { src: "/food_2.png", alt: "Grill", caption: "Platte für 2/4"},
      { src: "/wbfk.png", alt: "Grill" }
    ]
  },
  pizza: {
    images: [
      { src: "/pizza_sch.png", alt: "Pizza", caption: "Pizza Schinken" },
      { src: "/pizza_gyros.png", alt: "Pizza", caption: "Pizza Gyros" },
      { src: "/pizza_veggie.png", alt: "Pizza", caption: "Pizza Veggie" },
      { src: "/wbfk.png", alt: "Pizza" }
    ]
  },
  salate: {
    images: [
      { src: "/ketchup.png", alt: "Salate & Saucen", caption: "Ketchup" },
      { src: "/senf.png", alt: "Salate & Saucen", caption: "Senf" },
      { src: "/mayo.png", alt: "Salate & Saucen", caption: "Mayonnaise" },
      { src: "/holla.png", alt: "Salate & Saucen", caption: "Hollandaise" },
      { src: "/kase.png", alt: "Salate & Saucen", caption: "Käsesauce " },
    ]
  },
  getranke: {
    images: [
      { src: "/cola-fanta-sprite-doze.png", alt: "Kalte Getränke", caption: "Coca-Cola, Fanta, Sprite" },
      { src: "/mineral.png", alt: "Kalte Getränke", caption: "Mineralwasser" },
      { src: "/durst.png", alt: "Kalte Getränke", caption: "Durstlöscher" },
      { src: "/cola-fanta-sprite.png", alt: "Kalte Getränke", caption: "Coca-Cola, Fanta, Sprite" },
      { src: "/cola-zero.png", alt: "Kalte Getränke", caption: "Coca-Cola Zero" },
      { src: "/bier.png", alt: "Kalte Getränke", caption: "Bier" },
      { src: "/retsina.png", alt: "Kalte Getränke", caption: "Retsina" },
      { src: "/rot-wein.png", alt: "Kalte Getränke", caption: "Rot Wein" },
      { src: "/fuze-tea.png", alt: "Kalte Getränke", caption: "Fuze Tea" }
    ]
  }
};

export default function MenuPage() {
  const [menuPage, setMenuPage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Try to fetch menu data from API
    fetch('/api/menu')
      .then(res => res.json())
      .then(data => {
        setMenuPage(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log('Using fallback menu data:', err);
        setIsLoading(false);
      });
  }, []);

  // Function to render menu items in the modal
  const renderMenuItems = (items) => {
    return (
      <div className="mt-4">
        <h3 className="font-semibold text-lg mb-2">Speisekarte:</h3>
        <ul className="divide-y">
          {items.map((item, index) => (
            <li key={index} className="py-2 flex justify-between">
              <span>{item.name}</span>
              <span className="font-semibold">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section className="mt-8 text-center">
      <div className="grid mt-8 sm:grid-cols-3 gap-4">
        {/* IMBISS */}
        <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
          <SectionHeaders
            menuHeader={<a className="text-center text-xl">IMBISS</a>} 
          />
          <div className="item-center mt-2">
            <img src={'/imbiss.png'} className="max-h-auto block mx-auto" alt="Imbiss"/>
            <ProductModal 
              buttonText="Speisekarte anzeigen"
              buttonClassName="bg-rot hover:bg-red-600 text-white px-4 py-2 mt-4 rounded-lg transition-colors"
              images={menuData.imbiss.images}
              
            />
          </div>
        </div>

        {/* GYROS */}
        <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
          <SectionHeaders
            menuHeader={<a className="text-center text-xl">GYROS</a>} 
          />
          <div className="item-center mt-2">
            <img src={'/gyros.png'} className="max-h-auto block mx-auto" alt="Gyros"/>
            <ProductModal 
              buttonText="Speisekarte anzeigen"
              buttonClassName="bg-rot hover:bg-red-600 text-white px-4 py-2 mt-4 rounded-lg transition-colors"
              images={menuData.gyros.images}
            />
          </div>
        </div>

        {/* PITA GEROLLT */}
        <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
          <SectionHeaders
            menuHeader={<a className="text-center text-xl">Pita Gerollt</a>} 
          />
          <div className="item-center mt-2">
            <img src={'/pita.png'} className="max-h-auto block mx-auto" alt="Pita Gerollt"/>
            <ProductModal 
              buttonText="Speisekarte anzeigen"
              buttonClassName="bg-rot hover:bg-red-600 text-white px-4 py-2 mt-4 rounded-lg transition-colors"
              images={menuData.pita.images}
            />
          </div>
        </div>

        {/* BURGER */}
        <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
          <SectionHeaders
            menuHeader={<a className="text-center text-xl">Burger</a>} 
          />
          <div className="item-center mt-2">
            <img src={'/burger.png'} className="max-h-auto block mx-auto" alt="Burger"/>
            <ProductModal 
              buttonText="Speisekarte anzeigen"
              buttonClassName="bg-rot hover:bg-red-600 text-white px-4 py-2 mt-4 rounded-lg transition-colors"
              images={menuData.burger.images}
            />
          </div>
        </div>

        {/* SCHNITZEL */}
        <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
          <SectionHeaders
            menuHeader={<a className="text-center text-xl">Schnitzel</a>} 
          />
          <div className="item-center mt-2">
            <img src={'/schnitzel.png'} className="max-h-auto block mx-auto" alt="Schnitzel"/>
            <ProductModal 
              buttonText="Speisekarte anzeigen"
              buttonClassName="bg-rot hover:bg-red-600 text-white px-4 py-2 mt-4 rounded-lg transition-colors"
              images={menuData.schnitzel.images}
              title={menuData.schnitzel.title}
            />
          </div>
        </div>

        {/* GRILL */}
        <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
          <SectionHeaders
            menuHeader={<a className="text-center text-xl">Grill</a>} 
          />
          <div className="item-center mt-2">
            <img src={'/grill.png'} className="max-h-auto block mx-auto" alt="Grill"/>
            <ProductModal 
              buttonText="Speisekarte anzeigen"
              buttonClassName="bg-rot hover:bg-red-600 text-white px-4 py-2 mt-4 rounded-lg transition-colors"
              images={menuData.grill.images}
            />
          </div>
        </div>

        {/* PIZZA */}
        <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
          <SectionHeaders
            menuHeader={<a className="text-center text-xl">Pizza</a>} 
          />
          <div className="item-center mt-2">
            <img src={'/pizza.png'} className="max-h-auto block mx-auto" alt="Pizza"/>
            <ProductModal 
              buttonText="Speisekarte anzeigen"
              buttonClassName="bg-rot hover:bg-red-600 text-white px-4 py-2 mt-4 rounded-lg transition-colors"
              images={menuData.pizza.images}
            />
          </div>
        </div>

        {/* SALATE & SAUCEN */}
        <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
          <SectionHeaders
            menuHeader={<a className="text-center text-xl">Salate & Saucen</a>} 
          />
          <div className="item-center mt-2">
            <img src={'/salat_sauce.png'} className="max-h-auto block mx-auto" alt="Salate & Saucen"/>
            <ProductModal 
              buttonText="Speisekarte anzeigen"
              buttonClassName="bg-rot hover:bg-red-600 text-white px-4 py-2 mt-4 rounded-lg transition-colors"
              images={menuData.salate.images}
            />
          </div>
        </div>

        {/* KALTE GETRÄNKE */}
        <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
          <SectionHeaders
            menuHeader={<a className="text-center text-xl">Kalte Getränke</a>} 
          />
          <div className="item-center mt-2">
            <img src={'/kalte_getranke.png'} className="max-h-auto block mx-auto" alt="Kalte Getränke"/>
            <ProductModal 
              buttonText="Speisekarte anzeigen"
              buttonClassName="bg-rot hover:bg-red-600 text-white px-4 py-2 mt-4 rounded-lg transition-colors"
              images={menuData.getranke.images}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
