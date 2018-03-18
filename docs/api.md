## Prejudice API

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

## Prejudice interacting with Spectrum
Prejudice will post json to a Spectrum endpoint for actions.  Each action may have a few options to it.
The metadata that Prejudice sends may be different for different actions.

### Text messages
Spectrum sends json that looks like:

```json
{
  "to": "<10-digit-number>",
  "<focus_uid>": {
    "base_url": "<base-url-for-records>",
    "records": [
      "<record_id_1>", "<...>" , "<record_id_N>"
    ]
  }
}
```

### Email messages
```json
{
  "to": "<10-digit-number>",
  "<focus_uid>": {
    "base_url": "<base-url-for-records>",
    "records": [
      "<record_id_1>", "<...>" , "<record_id_N>"
    ]
  }
}
```
