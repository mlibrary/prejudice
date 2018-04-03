import Action from '../Action';

class File extends Action {
  constructor() {
    super();

    this.path = 'file';
    this.name = 'action-file-download';

  }

  ensureTarget() {
    if (document.getElementsByName(this.name).length >= 0) {
      return this;
    }
    const iframe = global.document.createElement('iframe');

    iframe.src = 'about:blank';
    iframe.name = this.name;
    iframe.style = 'visibility: hidden; display: none;';
    global.document.body.appendChild(iframe);
    return this;
  }

  ensureForm() {
    if (global.document.getElementById(this.name)) {
      return this;
    }
    const form = global.document.createElement('form');
    const input = global.document.createElement('input');

    form.id = this.name;
    form.action = this.getUrl();
    form.method = 'post';
    form.target = this.name;
    form.enctype = 'text/plain';

    input.type = 'hidden';
    form.appendChild(input);
    global.document.body.appendChild(form);
    return this;
  }

  setFormInput(data) {
    const input = global.document.getElementById(this.name).children[0];

    input.name = JSON.stringify(data).slice(0, -1) + ',"_":"';
    input.value = '"}';
  }

  submitForm() {
    global.document.getElementById(this.name).submit();
  }

  apply(data, callback) {
    this.ensureTarget();
    this.ensureForm();
    this.setFormInput(data);
    this.submitForm();
    callback({status: 'Success'});
  }
};

export default new File();
