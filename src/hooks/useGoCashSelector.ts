import { useSelector } from 'react-redux';
import { GoCashState } from '../domain/store/store';


export const useGoCashSelector = <Args extends unknown[], Result>(
  selector: (state: GoCashState, ...args: Args) => Result,
  ...args: Args
) => {
  return useSelector((state: GoCashState) => selector(state, ...args));
};
