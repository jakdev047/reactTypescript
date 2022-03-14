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
export interface AuthUser {
  name: string;
  email: string;
}

export interface CounterState {
  count: number;
}
export interface CounterAction {
  type: string;
  payload: number;
}
