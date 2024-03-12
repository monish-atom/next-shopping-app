export interface ProductDetails {
  product: Product;
}

export interface Product {
  code:                       string;
  name:                       string;
  description:                string;
  sapProductName:             string;
  sellingAttributes:          any[];
  color:                      Color;
  whitePrice:                 WhitePrice;
  priceType:                  string;
  assortmentTypeKey:          string;
  lengthCollection:           Collection[];
  fits:                       string[];
  showPriceMarker:            boolean;
  baseProductCode:            string;
  ancestorProductCode:        string;
  mainCategory:               Category;
  dynamicHeader:              string;
  supercategories:            Category[];
  constructionDescr:          string;
  customerGroup:              string;
  functions:                  any[];
  newArrival:                 boolean;
  articlesList:               ArticlesList[];
  inStock:                    boolean;
  productUrl:                 string;
  swatchesType:               string;
  rootCategoryPath:           string;
  productKey:                 string;
  productCountryOfProduction: string;
  showGarmentsInfo:           boolean;
  yearOfProduction:           string;
  complianceMarkers:          any[];
  styleCollection:            Collection[];
  presentationTypes:          string;
  presentationTypesCode:      string;
  multipack:                  boolean;
  newProduct:                 boolean;
}

export interface ArticlesList {
  code:                                  string;
  name:                                  string;
  description:                           string;
  sellingAttributes:                     any[];
  color:                                 Color;
  whitePrice:                            WhitePrice;
  colourDescription:                     string;
  pattern:                               string;
  lengthCollection:                      any[];
  showPriceMarker:                       boolean;
  disclaimer:                            any[];
  lightNeeds:                            any[];
  wateringNeeds:                         any[];
  plantType:                             any[];
  plantAndFlowerStyle:                   any[];
  salesMode:                             any[];
  seats:                                 any[];
  stuffingMaterial:                      any[];
  firmness:                              any[];
  galleryDetails:                        Ail[];
  fabricSwatchThumbnails:                Ail[];
  styleWith:                             StyleWith[];
  functions:                             any[];
  careInstructions:                      string[];
  compositions:                          Composition[];
  materialDetails:                       MaterialDetail[];
  graphicalAppearanceDesc:               string;
  genericDescription:                    string;
  variantsList:                          VariantsList[];
  concepts:                              string[];
  parentProductCode:                     string;
  styleWithScenario:                     string;
  inStore:                               boolean;
  productTransparencyEnabled:            boolean;
  suppliersDetailEnabled:                boolean;
  suppliersSectionDisabledReason:        string;
  comingSoon:                            boolean;
  modelHeight:                           string;
  garmentSize:                           string;
  external:                              boolean;
  articleType:                           string;
  brandName:                             string;
  palette:                               boolean;
  travelSize:                            boolean;
  keyFabrics:                            string[];
  corporateBrandId:                      number;
  woodCompositions:                      any[];
  articleCountryOfProduction:            string;
  semiBulky:                             boolean;
  availabilityOnlineDate:                number;
  aggregatedSustainabilityCompositions?: AggregatedSustainabilityComposition[];
  sustainabilityCompositions?:           Composition[];
}

export interface AggregatedSustainabilityComposition {
  sustainabilityName:       string;
  sustainabilityPercentage: string;
}

export interface Color {
  code:     string;
  text:     string;
  rgbColor: string;
}

export interface Composition {
  materials:       Material[];
  compositionType: CompositionType;
}

export enum CompositionType {
  Lining = "Lining",
  PocketLining = "Pocket lining",
  Shell = "Shell",
}

export interface Material {
  name:       string;
  percentage: string;
}

export interface Ail {
  id:        string;
  mimeType:  MIMEType;
  baseUrl:   string;
  url:       string;
  assetType: AssetType;
}

export enum AssetType {
  Descriptivedetail = "DESCRIPTIVEDETAIL",
  Descriptivestilllife = "DESCRIPTIVESTILLLIFE",
  Lookbook = "LOOKBOOK",
}

export enum MIMEType {
  ImageJPEG = "image/jpeg",
}

export interface MaterialDetail {
  name:        string;
  description: string;
}

export interface StyleWith {
  code:                       string;
  lengthCollection:           any[];
  showPriceMarker:            boolean;
  styleWithOrigin:            StyleWithOrigin;
  parentProductCode:          string;
  inStore:                    boolean;
  productTransparencyEnabled: boolean;
  suppliersDetailEnabled:     boolean;
  comingSoon:                 boolean;
  external:                   boolean;
  palette:                    boolean;
  travelSize:                 boolean;
  semiBulky:                  boolean;
}

export enum StyleWithOrigin {
  Dam = "dam",
  Manual = "manual",
}

export interface VariantsList {
  code: string;
  size: Size;
}

export interface Size {
  sizeCode:             string;
  name:                 string;
  sizeScaleCode:        string;
  sizeScaleDescription: SizeScaleDescription;
  sizeOrder:            number;
  sizeFilter:           string;
  market:               Market;
}

export enum Market {
  SPUs = "SP_US",
}

export enum SizeScaleDescription {
  DIVIDEDLadiesTopsAlphaS = "DIVIDED - Ladies tops, alpha s",
}

export interface WhitePrice {
  price:         number;
  currency:      string;
  referenceFlag: boolean;
  startDate:     number;
  endDate:       number;
}

export interface Collection {
  code:  string;
  value: string[];
}

export interface Category {
  name?: string;
  code:  string;
}
