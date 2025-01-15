import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16 mt-12 mb-8" id="opentime">
        <div className="inline-block">
          <SectionHeaders
            mainHeader={<a>Öffnungs<a className="text-primary">zeiten</a></a>}
          />
          <table>
            <tbody className="gap-4 ">
            <a className="gap-4">
                <th className="text-left text-white">................</th>
                  <td><div className="text-white">.................</div></td>
            </a>
            <tr className="gap-4">
                <th className="text-left">Montag</th>
                  <td><div className="text-primary">Geschlossen</div></td>
            </tr>
            <tr className="regular">
              <th className="text-left">Dienstag</th>
                <td><div className=" text-primary">11:30 – 22:00</div></td>
            </tr>
            <tr className="regular">
              <th className="text-left">Mittwoch</th>
                <td><div className="text-right text-primary">11:30 – 22:00</div></td>
            </tr>
            <tr className="regular">
              <th className="text-left">Donnerstag</th>
                <td><div className="text-right text-primary">11:30 – 22:00</div></td>
            </tr>
            <tr className="regular">
              <th className="text-left">Freitag</th>
                <td><div className="text-right text-primary">11:30 – 22:00</div></td>
            </tr>
            <tr className="regular">
              <th className="text-left">Samstag</th>
                <td><div className="text-right text-primary">11:30 – 22:00</div></td>
            </tr>
            <tr className="regular">
              <th className="text-left">Sonntag</th>
                <td><div className="text-right text-primary">14:00 – 22:00</div></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 md:ml-20 inline-block">
          <SectionHeaders
            mainHeader={<a>Liefer<a className="text-primary">zeiten</a></a>}
          />
          <table>
            <tbody className="gap-4 ">
            <a className="gap-4">
                <th className="text-left text-white">................</th>
                  <td><div className="text-white">.................</div></td>
            </a>
            <tr className="gap-4">
                <th className="text-left">Montag</th>
                  <td><div className="text-primary">Geschlossen</div></td>
            </tr>
            <tr className="regular">
              <th className="text-left">Dienstag</th>
                <td><div className=" text-primary">16:00 – 21:30</div></td>
            </tr>
            <tr className="regular">
              <th className="text-left">Mittwoch</th>
                <td><div className="text-right text-primary">16:00 – 21:30</div></td>
            </tr>
            <tr className="regular">
              <th className="text-left">Donnerstag</th>
                <td><div className="text-right text-primary">16:00 – 21:30</div></td>
            </tr>
            <tr className="regular">
              <th className="text-left">Freitag</th>
                <td><div className="text-right text-primary">16:00 – 21:30</div></td>
            </tr>
            <tr className="regular">
              <th className="text-left">Samstag</th>
                <td><div className="text-right text-primary">16:00 – 21:30</div></td>
            </tr>
            <tr className="regular">
              <th className="text-left">Sonntag</th>
                <td><div className="text-right text-primary">16:00 – 21:00</div></td>
            </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="text-center my-16 mt-12 mb-8" id="about">
        <SectionHeaders
          subHeader={'Unsere Geschichte'}
          mainHeader={<a>Über  <span className="text-primary">Uns</span></a>}
        />
        <div className=" mt-6  gap-4 inria text-justify">

          <p>Ein herzliches Willkommen erwartet Sie im Greek Tasty . Wir freuen uns, Ihr Gastgeber in Altena zu sein! Sie werden mit echter Gastfreundschaft und einer großartigen Auswahl an deutscher und griechischer Küche begrüßt. Erleben Sie fantastisches Fast Food, das von unserem freundlichen Personal serviert wird. Unsere köstlichen Speisen warten darauf, von Ihnen probiert zu werden. Erfrischendes Bier und Wein stehen ebenfalls für Sie bereit. Sie haben Hunger? Besuchen Sie uns und genießen Sie leckeren Brunch, Mittag- und Abendessen in einem entspannten Ambiente.</p>
          
        </div>
      </section>
      <section className="text-center my-8 mt-12" id="contact">
        <SectionHeaders
          subHeader={'Zögern Sie nicht'}
          mainHeader={<a>Kontakt <span className="text-primary">Uns</span></a>}
        />
        <div className=" mt-6">

      <div className="grid mt-8 sm:grid-cols-3 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
                <SectionHeaders
                  menuHeader={<a className="text-center text-xl">Kommen Sie vorbei</a>} 
                />
                  <div className="item-center mt-2">
                    <a className="text-2xl  neucha text-primary" href="https://maps.app.goo.gl/uRvWAFZxyNZLPpY46" target="blank">
                      Bahnhofstr. 11, 58762 Altena Deutschland
                    </a>
                  </div>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
                <SectionHeaders
                  menuHeader={<a className="text-center text-xl">Rufen Sie an</a>} 
                />
                  <div className="item-center mt-2">
                    <a className="text-2xl  neucha text-primary" href='tel:+4923522688115'>
                    +4923522688115
                    </a>
                  </div>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
                <SectionHeaders
                  menuHeader={<a className="text-center text-xl">Schreiben Sie uns</a>} 
                />
                  <div className="item-center mt-2">
                    <a className="text-2xl  neucha text-primary" href="mailto:greektastyde@gmail.com">
                      greektastyde@gmail.com
                    </a>
                  </div>
              </div>
      </div>
        </div>
      </section>
    </>
  )
}
