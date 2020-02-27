export interface IMetaData {
  searchSource: string
  searchType?: any
}

export interface IProvider {
  id: string
  logoUrl: string
  legalName: string
  shortName: string
  statistics?: any
}

export interface IPrice {
  total: number
  daily: number
  strikeThroughTotal?: any
  strikeThroughDaily?: any
  isExact: boolean
  currency: string
  ccy: string
  discountType?: any
  discountAmount?: any
  nights?: any
}

export interface IUsp {
  id: string
  format: string
  value: number
  unit: string
  group: string
}

export interface ILocation {
  lat: number
  lng: number
  name: string
  geoHash: string
  distanceToSearchRegionCenter?: any
}

export interface IPhoto {
  t: string
  m: string
  l: string
  hr: string
  overlay: boolean
}

export interface IRating {
  count: number
  value: number
}

export interface IArea {
  value: number
  unit: string
}

export interface IDetails {
  name: string
  shortName: string[]
  apartmentTypeTitle: string
  area: IArea
  bedroomsCount: number
  guestsCount: number
  apartmentType: string
  longName?: any
  bedTypes: string[]
}

export interface IOffer {
  metaData: IMetaData
  id: string
  groupId: string
  isAvailable?: any
  isExpressBookable: boolean
  isInstantBookable: boolean
  routingType: string
  outboundLink: string
  outboundLinkV2: string
  detailsLink: string
  internalLink: string
  provider: IProvider
  price: IPrice
  usps: IUsp[]
  location: ILocation
  photos: IPhoto[]
  likes?: any
  rating: IRating
  isCrosslink: boolean
  details: IDetails
  isRedirect: boolean
}
