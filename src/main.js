import Prejudice from './Prejudice.js';

var mrDarcy = new Prejudice();
//mrDarcy.setRecordStorage(Prejudice.VariableStorageDriver);
mrDarcy.addRecord('12345');
mrDarcy.act('text', '1234567890', function (info) { console.log(info); })
mrDarcy.clearRecords();
