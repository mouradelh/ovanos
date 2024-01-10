export interface SinglePostStrapi {
    data: SinglePostData;
    meta: Meta;
}

export interface SinglePostData {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    Title:             string;
    Text:              Text[];
    Datum:             Date;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
    KorteBeschrijving: string;
    Image:             Image;
    PostText:          string;
    ArticleText: ArticleText[];
}
interface ArticleText {
    type: string;
    children: Child[];
    level?: number;
  }
export interface Image {
    data: ImageData;
}

export interface ImageData {
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

export interface Text {
    type:     string;
    children: Child[];
}

export interface Child {
    type: string;
    text: string;
}

export interface Meta {
}
