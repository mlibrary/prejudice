# Prejudice API

Used something like:

```javascript
import Prejudice from 'prejudice';

Prejudice.addRecord(...);
records = Prejudice.listRecords();
Prejudice.removeRecord(...);
Prejudice.clearRecords();

Prejudice.act('text', 'target', callback);
Prejudice.act('email', 'target', callback);
Prejudice.act('file', 'target', callback);

```
