import PersistantStorageDriver from './PersistantStorageDriver';
import VariableStorageDriver from './VariableStorageDriver';

let exp = VariableStorageDriver;

if (typeof window !== 'undefined') {
  exp = new PersistantStorageDriver(window.sessionStorage, 'Prejudice.sessionStorage');
}

export default exp;
