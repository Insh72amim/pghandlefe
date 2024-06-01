export interface Address {
  id: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3?: string;
  zipcode: string;
  city: string;
  state: string;
  country: string;
}

export interface Amenity {
  id: string;
  food: boolean;
  internet: boolean;
  television: boolean;
  washingMachine: boolean;
  refrigerator: boolean;
  airConditioned: boolean;
  gym: boolean;
  swimmingPool: boolean;
  bikeParking: boolean;
  carParking: boolean;
}

export interface PG {
  id: string;
  owner: string;
  name: string;
  contactNumber: string;
  totalFloors: number;
  totalRooms: number;
  address?: Address;
  amenity?: Amenity;
}
