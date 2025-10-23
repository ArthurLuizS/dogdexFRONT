import { Health } from "./health";
import { Owner } from "./owner";

export interface Dog {
  name: string;
  age: number;
  birth_date: string;
  gender: "M" | "F";
  size: "P" | "M" | "G";
  breed: string;
  instagram: string;
  is_active: boolean;
  owner: Owner;
  health: Health;
}
