const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', { type: String, required: false });
  }

  async prompting() {
    if (!this.name) {
      this.answers = await this.prompt([
        {
          type: 'list',
          name: 'type',
          message: 'What to create',
          choices: ['Component', 'Module'],
        },
        {
          type: 'input',
          name: 'name',
          message: answers => `${answers.type} name`,
          default: answers => `Untitled ${answers.type}`,
        },
      ]);
      this.type = this.answers.type;
      this.displayName = toSentence(this.answers.name);
      this.kebabName = toKebabCase(this.answers.name);
      this.camelName = toCamcelCase(this.answers.name);
      this.pascalName = toPascalCase(this.answers.name);
    }
  }

  writing() {
    if (this.answers.type === 'Module') {
      this.generateModule();
    } else if (this.answers.type === 'Component') {
      this.generateComponent();
    }
  }

  generateModule() {
    this.fs.copyTpl(this.templatePath('./module/module.notes.md.ejs'), this.destinationPath(`./src/modules/${this.kebabName}/${this.kebabName}.notes.md`));

    this.fs.copyTpl(this.templatePath('./module/module.data.js.ejs'), this.destinationPath(`./src/modules/${this.kebabName}/${this.kebabName}.data.js`), {
      camelName: this.camelName,
    });

    this.fs.copyTpl(this.templatePath('./module/module.module.js.ejs'), this.destinationPath(`./src/modules/${this.kebabName}/${this.kebabName}.module.js`), {
      kebabName: this.kebabName,
      camelName: this.camelName,
      pascalName: this.pascalName,
    });

    this.fs.copyTpl(this.templatePath('./module/module.stories.js.ejs'), this.destinationPath(`./src/modules/${this.kebabName}/${this.kebabName}.stories.js`), {
      displayName: this.displayName,
      kebabName: this.kebabName,
      camelName: this.camelName,
      pascalName: this.pascalName,
    });

    this.fs.copyTpl(this.templatePath('./module/index.js.ejs'), this.destinationPath(`./src/modules/${this.kebabName}/index.js`), {
      kebabName: this.kebabName,
    });

    this.fs.copyTpl(this.templatePath('./module/module.scss.ejs'), this.destinationPath(`./src/theme/04-modules/${this.kebabName}.scss`), {
      kebabName: this.kebabName,
    });
  }
};

const toSentence = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
    .filter(Boolean)
    .map(x => x.toLowerCase())
    .join(' ')
    .replace(/^./, char => char.toUpperCase());

const toKebabCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
    .filter(Boolean)
    .map(x => x.toLowerCase())
    .join('-');

const toCamcelCase = str =>
  str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });

const toPascalCase = str =>
  str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return match.toUpperCase();
  });
