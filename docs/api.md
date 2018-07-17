## Prejudice API

Used something like:

```javascript
import Prejudice from 'prejudice';
import { Pride } from 'pride';
import { config } from '../../config'; // Guessing here.

let mrDarcy = new Prejudice({
  recordEngine: Pride,
  datastores: config.datastores.list,
  actionBaseUrl: config.spectrum[process.env.NODE_ENV] || config.spectrum.development
});

// Alternatively values set in the constructor can be set any time.
mrDarcy.registerRecordEngine(Pride);
mrDarcy.registerDatastore('mirlyn', 'https://search-staging.www.lib.umich.edu/catalog/record');
mrDarcy.addRecord(...);
records = mrDarcy.listRecords();
mrDarcy.removeRecord(...);
mrDarcy.clearRecords();

mrDarcy.addObserver((function (fitzwilliam, otherThing) {
  return function(records) {
    otherThing.records = fitzwilliams.listRecords();
  }
})(mrDarcy, otherThing));

mrDarcy.act('text', 'datastore', '1234567890', callback);
mrDarcy.act('email', 'datastore', 'example@example.com', callback);
mrDarcy.act('file', 'datastore', '???', callback);
mrDarcy.act('favorite', 'datastore', '???', callback);
mrDarcy.act('tag', 'datastore', 'tag string here', callback);
mrDarcy.act('unfavorite', 'datastore', '???', callback);
mrDarcy.act('untag', 'datastore', 'tag string here', callback);


// Create a new prejudice instance for a single-record action.
// Use the VariableStorageDriver so that the short-term instance
// isn't modifying the SessionStorage or LocalStorage.
msBennet = new Prejudice({
  datastores: config.datastores.list,
  recordEngine: Pride,
  recordStorage: Prejudice.VariableStorageDriver,
  actionBaseUrl: config.spectrum[process.env.NODE_ENV] || config.spectrum.development

});

msBennet.addObserver((function (elizabeth, otherThing) {
  return function(records) {
    otherThing.records = elizabeth.listRecords();
  }
})(msBennet, otherThing));
msBennet.act('text', 'datastore', '1234567890', callback);
msBennet.act('email', 'datastore', 'example@example.com', callback);
msBennet.act('file', 'datastore', '???', callback);

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
  "to": "<email-address>",
  "<focus_uid>": {
    "base_url": "<base-url-for-records>",
    "records": [
      "<record_id_1>", "<...>" , "<record_id_N>"
    ]
  }
}
```
