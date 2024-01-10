export interface LogoData {
    data: LogoData;
    meta: Meta;
}

export interface LogoData {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    Naam:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    Afbeelding:  Afbeelding;
}

export interface Afbeelding {
    data: AfbeeldingData;
}

export interface AfbeeldingData {
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
    thumbnail: Small;
    small:     Small;
}

export interface Small {
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

export interface Meta {
}
