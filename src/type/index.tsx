export interface GreetProps {
  name: string;
}
export interface PersonProps {
  name: Name;
}
export interface Name {
  firstName: string;
  lastName: string;
}
export interface PersonListProps {
  names: Name[];
}
