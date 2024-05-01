import VariableStorageDriver from './VariableStorageDriver';
import PersistantStorageDriver from './PersistantStorageDriver';

let exp = VariableStorageDriver;

if (typeof window !== 'undefined') {
  exp = new PersistantStorageDriver(window.sessionStorage, 'Prejudice.sessionStorage');
}

export default exp;
