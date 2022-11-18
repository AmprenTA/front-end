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
}
