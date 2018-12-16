import { action } from 'typesafe-actions';
import { typeKeys } from './types';

export const save = (message: string) => action(typeKeys.SAVE, message);
