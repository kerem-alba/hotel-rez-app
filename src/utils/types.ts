export interface Address {
  street: string;
  city: string;
  country: string;
  latitude: string;
  longitude: string;
}

export interface Room {
  roomName: string;
  bedQuantity: number;
  imageUrl?: string;
  imageUrls?: string[];
}

export interface Hotel {
  id: string;
  name: string;
  address: Address;
  description: string;
  imageUrls: string[];
  pricePerNight: number;
  rating: number;
  rooms: Room[];
}

export interface City {
  id: string;
  city: string;
  cityImgUrl: string;
}
