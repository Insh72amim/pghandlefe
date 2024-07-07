import { Address } from './Address';
import { Amenity } from './Amenity';

export type Pg = {
  owner: string;
  name: string;
  contactNumber: string;
  totalFloors: string;
  totalRooms: string;
  address?: Address;
  amenity?: Amenity;
};
