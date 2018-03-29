import VariableStorageDriver from './VariableStorageDriver';
import PersistantStorageDriver from './PersistantStorageDriver';

let exp = VariableStorageDriver;

if (typeof global.window !== 'undefined') {
  exp = new PersistantStorageDriver(global.window.sessionStorage, 'Prejudice.sessionStorage');
}

export default exp;
