export interface Strapi {
    data: StrapiData;
    meta: Meta;
}

export interface StrapiData {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    Naam:         string;
    Prijs:        number;
    Beschrijving: string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  null;
    Foto:         Foto;
    menu:         Menu;
}

export interface Foto {
    data: FotoData;
}

export interface FotoData {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
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
    ext:    string;
    mime:   string;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

export interface Menu {
    data: MenuData;
}

export interface MenuData {
    id:         number;
    attributes: TentacledAttributes;
}

export interface TentacledAttributes {
    SoortMenu:   string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: null;
}

export interface Meta {
}
