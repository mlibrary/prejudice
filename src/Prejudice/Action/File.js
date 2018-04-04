import Action from '../Action';

class File extends Action {
  constructor() {
    super();

    this.path = 'file';
    this.formId = 'action-file-download';
    this.targetName = 'action-file-download-target';

    this.ensureForm = this.ensureForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.setFormInput = this.setFormInput.bind(this);
    this.ensureTarget = this.ensureTarget.bind(this);
  }

  ensureTarget() {
    if (global.document.getElementsByName(this.targetName).length > 0) {
      return this;
    }
    const iframe = global.document.createElement('iframe');

    iframe.src = 'about:blank';
    iframe.name = this.targetName;
    iframe.style = 'visibility: hidden; display: none;';
    global.document.body.appendChild(iframe);
    return this;
  }

  ensureForm() {
    if (global.document.getElementById(this.formId)) {
      return this;
    }
    const form = global.document.createElement('form');
    const input = global.document.createElement('input');

    form.id = this.formId;
    form.action = this.getUrl();
    form.method = 'post';
    form.target = this.targetName;
    form.enctype = 'text/plain';

    input.type = 'hidden';
    form.appendChild(input);
    global.document.body.appendChild(form);
    return this;
  }

  setFormInput(data) {
    const input = global.document.getElementById(this.formId).children[0];

    input.name = JSON.stringify(data).slice(0, -1) + ',"_":"';
    input.value = '"}';
  }

  submitForm() {
    global.document.getElementById(this.formId).submit();
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
