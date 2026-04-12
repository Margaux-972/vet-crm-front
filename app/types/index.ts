export type Client = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pet: Pet[];
};

export type Pet = {
  id: number;
  name: string;
  age: number;
  species: string;
  client: Client;
};
