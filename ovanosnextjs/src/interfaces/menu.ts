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