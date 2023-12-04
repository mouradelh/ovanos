import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import buttons from '@/components/button.module.css'

interface ButtonProps {
    title: string,
    url: string,
}

export function Button({title, url}:ButtonProps) {
    return(
        <div className={buttons.card}>
            <img src={url} alt="Avatar" style={{width:100}}/>
            <div className={buttons.container}>
                <h4><b>{title}</b></h4> 
                <p>Architect & Engineer</p> 
            </div>
        </div>
    )

}

export default function Menu() {
    return(
        <>
        <Header></Header>
        <Navigation></Navigation>
        <main>
            <h1>Menu</h1>
            <Button></Button>
        </main>
        <Footer></Footer>
        </>
    )
}