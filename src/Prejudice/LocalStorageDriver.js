import VariableStorageDriver from './VariableStorageDriver';
import PersistantStorageDriver from './PersistantStorageDriver';

let exp = VariableStorageDriver;

if (typeof global.window !== 'undefined') {
  exp = new PersistantStorageDriver(global.window.localStorage, 'Prejudice.localStorage');
}

export default exp;
