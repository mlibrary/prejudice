import VariableStorageDriver from './VariableStorageDriver';
import PersistantStorageDriver from './PersistantStorageDriver';

let exp = VariableStorageDriver;

if (typeof window !== 'undefined') {
  exp = new PersistantStorageDriver(window.localStorage, 'Prejudice.localStorage');
}

export default exp;
