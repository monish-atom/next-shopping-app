export interface LadiesNewArrivals {
  results:        LadiesResult[];
  // freeTextSearch: string;
  // categoryCode:   string;
  // baseUrl:        string;
}

export interface LadiesResult {
  code:                  string;
  name:                  string;
  stock:                 Stock;
  price:                 Price;
  images:                GalleryImage[];
  categories:            any[];
  pk:                    string;
  sellingAttributes?:    SellingAttribute[];
  whitePrice:            Price;
  articles:              Article[];
  visible:               boolean;
  concept?:              Concept[];
  numbersOfPieces:       number;
  defaultArticle:        Article;
  sale:                  boolean;
  variantSizes:          VariantSize[];
  swatches:              any[];
  articleCodes?:         string[];
  ticket:                string;
  searchEngineProductId: string;
  dummy:                 boolean;
  linkPdp:               string;
  categoryName:          CategoryName;
  rgbColors:            string[];
  articleColorNames:    string[];
  ecoTaxValue:           number;
  swatchesTotal:         number;
  showPriceMarker:       boolean;
  redirectToPdp:         boolean;
  mainCategoryCode:      string;
  comingSoon:            boolean;
  brandName:             BrandName;
  galleryImages:         GalleryImage[];
  allArticleCodes?:      string[];
  allArticleImages?:     string[];
  allArticleBaseImages?: string[];
}

export interface Article {
  code:               string;
  name:               string;
  images:             GalleryImage[];
  pk:                 string;
  sellingAttributes?: SellingAttribute[];
  whitePrice:         Price;
  logoPicture:        GalleryImage[];
  normalPicture:      GalleryImage[];
  visible:            boolean;
  numbersOfPieces:    number;
  ticket:             string;
  dummy:              boolean;
  ecoTaxValue:        number;
  redirectToPdp:      boolean;
  comingSoon:         boolean;
  color:              Color;
  rgbColor:           string;
  damStyleWith?:      string[];
  turnToSku:          string;
  flexiPLPLayout?:    FlexiPLPLayout;
  genArticle?:        string;
}

export interface Color {
  code:       string;
  text:       string;
  filterName: string;
  hybrisCode: string;
}

export interface FlexiPLPLayout {
  type: FlexiPLPLayoutType;
}

export enum FlexiPLPLayoutType {
  BigPortrait = "BIG_PORTRAIT",
  Na = "NA",
}

export interface GalleryImage {
  url:     string;
  baseUrl: string;
}

export enum SellingAttribute {
  NewArrival = "New Arrival",
}

export interface Price {
  currencyIso:    CurrencyISO;
  value:          number;
  priceType:      PriceTypeEnum;
  formattedValue: string;
  type:           PriceType;
}

export enum CurrencyISO {
  Usd = "USD",
}

export enum PriceTypeEnum {
  Buy = "BUY",
}

export enum PriceType {
  White = "WHITE",
}

export enum BrandName {
  HM = "H&M",
}

export enum CategoryName {
  Ladies = "Ladies",
}

export enum Concept {
  BasicsEverydayFashion = "BASICS,EVERYDAY FASHION",
  Divided = "DIVIDED",
  EverydayFashion = "EVERYDAY FASHION",
}

export interface Stock {
  stockLevel: number;
}

export interface VariantSize {
  orderFilter: number;
  filterCode:  string;
}
