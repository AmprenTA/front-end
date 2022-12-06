export type Car = {
  fuel_type: number
  fuel_consumption: number
  total_km: number
}

export type Fly = {
  from: string
  to: string
}
export type Bus = {
  transport_type: any
  total_km: number
}

export type Transport = {
  cars: Array<Car>
  flights: Array<Fly>
  public_transports: Array<Bus>
  location: string
}

export type Household = {
  electricity: number
  natural_gas: number
  wood: number
  footprint_id?: number
}
export type Food = {
  beef: number
  lamb: number
  poultry: number
  pork: number
  fish: number
  milk_based: number
  cheese: number
  eggs: number
  coffee: number
  vegetables: number
  bread: number
  footprint_id: number
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
