import { Header } from '@/components/header'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Header></Header>
        <Navigation></Navigation>
        <main>
          <div>
          <h1 className='text-2xl font-bold'>Restaurant</h1>
            <p style={{width:500}}>Welkom bij Ovanos, waar elke maaltijd een meesterwerk is en genieten een kunst. Begin je dag met heerlijk ontbijt, bereid met verse ingrediënten. Ontdek onze diverse lunch- en dineropties, waar smaken van over de hele wereld samenkomen. Sluit je culinaire reis af met verleidelijke desserts die de perfecte finishing touch bieden. Bij Ovanos is elke hap een viering van smaak en gezelligheid. Ontdek de onvergetelijke eetervaring die we te bieden hebben.</p>
          </div>
          <div><button><Link href={"/menu"} legacyBehavior><a>Ons Menu</a></Link></button></div>
          <div>
            <h2>Openingstijden</h2>
            <ul>
              <li>Maandag : 04:30 - 20:00</li>
              <li>Dinsdag : 04:30 - 20:00</li>
              <li>Donderdag : 04:30 - 20:00</li>
              <li>Woensdag : Gesloten</li>
              <li>Vrijdag : 04:30 - 20:00</li>
              <li>Zaterdag : 04:30 - 20:00</li>
              <li>Zondag : 04:30 - 20:00</li>
            </ul>
          </div>
          <div>
            <h2>Adres</h2>
            <p>LANGE ZAVELSTRAAT 38-40 2060 ANTWERPEN</p>
          </div>
          <div>
            <h2>Telefoon</h2>
            <p>0488 03 30 30</p>
          </div>
        </main>
        <Footer></Footer>
    </>
  )
}
