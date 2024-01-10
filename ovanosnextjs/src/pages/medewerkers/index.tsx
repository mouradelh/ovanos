import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AllMedewerkers } from "../api/apiService";
import { Medewerker } from "@/interfaces/Medewerker";

export interface Personeel {
    id: number,
    naam: string,
    biografie: string,
    imageUrl: string,
}

export function PersoneelsKaart({id, naam, biografie, imageUrl}: Personeel) {
    return(
        <>
        <div key={id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={`http://localhost:1337${imageUrl}`} alt={naam} />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{naam}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{biografie}</p>
            </div>
        </div>
        </>
    )
}

export default function Medewerkers() {
    const [medewerkers , setMedewerkers] = useState<Medewerker>();
    useEffect(() => {
        const fetchMedewerkers = async() => {
            const medewerkers = await AllMedewerkers();
            setMedewerkers(medewerkers);
        }
        fetchMedewerkers();
        console.log(medewerkers);
    },[])
    return(
        <>
        <Header></Header>
        <Navigation></Navigation>
        <h1 className="text-center font-bold">Medewerkers</h1>
        <div className="flex flex-wrap space-x-3 justify-center">
            {medewerkers && medewerkers.data && medewerkers.data.map((medewerker) => (
                <PersoneelsKaart id={medewerker.id} naam={medewerker.attributes.Naam} biografie={medewerker.attributes.Biografie} imageUrl={medewerker.attributes.Afbeelding.data.attributes.formats.small.url} ></PersoneelsKaart>
            ))}
        </div>
        </>
    )
}