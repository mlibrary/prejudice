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

mrDarcy.act('text', 'target', callback);
mrDarcy.act('email', 'target', callback);
mrDarcy.act('file', 'target', callback);

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
