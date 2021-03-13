//sjekk om bruker er eller ikke er logget inn
import { FETCH_USER } from '../actions/types';

export default function erBrukerLoggetInn(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}