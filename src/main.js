import Prejudice from './Prejudice.js';

const mrDarcy = new Prejudice();
// MrDarcy.setRecordStorage(Prejudice.VariableStorageDriver);
mrDarcy.addRecord('12345');
mrDarcy.act('text', '1234567890', (info) => {
  console.log(info);
});
mrDarcy.clearRecords();
