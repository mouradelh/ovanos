import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";


export interface Menu {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:         number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    Naam:         string;
    Beschrijving: string;
    Prijs:        number;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    Afbeelding:   Afbeelding;
    menu:         Afbeelding;
}

export interface Afbeelding {
    data: Data | null;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export enum EXT {
    PNG = ".png",
}

export interface Formats {
    thumbnail: Large;
    small:     Large;
    medium:    Large;
    large:     Large;
}

export interface Large {
    name:   string;
    hash:   string;
    ext:    EXT;
    mime:   MIME;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

export enum MIME {
    ImagePNG = "image/png",
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}

export default function Post() {
    const router = useRouter();
    const [specificMenu, setSpecificMenu] = useState<Menu | null>(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                let result = await fetch(`http://localhost:1337/api/${router.query.id}?populate=*`, {
                headers: {
                    Authorization : 'bearer a32ab5bd4a1bb2e0d4f34d931db6891bbab646ca3e34129c5f7e9bb6bfd28ccb1f7c142f8621d860704acf9d2b4ecbcf3decf73f122c7a3bf13f6cd3245f9f7a152ca6858beef5c2c7e4c64b3708f81c0209ed4f8fe001cdf4da4aa2f5de84ac50d66826446664ddbb0f91880af197a02c9fda8f97cecb9928dc8fb02de44618',
                },
            });
                let json: Menu = await result.json();
                setSpecificMenu(json);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        }

        fetchMenu();
    }, [router.query.id]); // Add router.query.id as a dependency

    return (
        <div>
            {specificMenu && specificMenu.data && specificMenu.data.map((item) => (
                <p key={item.id}>{item.attributes.Naam}</p>
            ))}
        </div>
    )
}
