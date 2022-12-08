export type Car = {
  fuel_type: number | string
  fuel_consumption: number | string
  total_km: number | string
}

export type Fly = {
  from: string
  to: string
}
export type Bus = {
  transport_type: any
  total_km: number | string
}

export type Transport = {
  cars: Array<Car>
  flights: Array<Fly>
  public_transports: Array<Bus>
  location: string
}

export type Household = {
  electricity: number | string
  natural_gas: number | string
  wood: number | string
  footprint_id?: number
}
export type Food = {
  beef: number | string
  lamb: number | string
  poultry: number | string
  pork: number | string
  fish: number | string
  milk_based: number | string
  cheese: number | string
  eggs: number | string
  coffee: number | string
  vegetables: number | string
  bread: number | string
  footprint_id: number | string
}
export type Result = {
  transportation_carbon_footprint: number
  house_carbon_footprint: number
  food_carbon_footprint: {
    average: number
    min: number
    max: number
  }
}
