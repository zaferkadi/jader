export interface INe {
  lat: number
  lng: number
}

export interface ISw {
  lat: number
  lng: number
}

export interface IViewport {
  ne: INe
  sw: ISw
}

export interface ICursor {
  totalCount: number
  nextPage: string
  previousPage?: any
}

export interface ISearchRegion {
  id: number
  name: string
  level: number
  availability?: any
  marketingCampaignId: number
  bookedPercentage?: any
  totalNumberOfOffers?: any
}

export interface IPerformance {
  legacyTimeServerSearch: number
  timeServerSearch: number
}

export interface IMetaData {
  viewport?: IViewport
  cursor?: ICursor
  pathname?: string
  searchRegion?: ISearchRegion
  searchId?: string
  performance?: IPerformance
  listTitle?: string
  esQuery?: any
}
