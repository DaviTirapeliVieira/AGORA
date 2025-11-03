module.exports = plop => {
  // Redux Feature Generator
  plop.setGenerator('redux feature', {
    description: 'Create a Redux feature with slices, sagas, models, and API',
    prompts: [
      {
        type: 'input',
        name: 'featureName',
        message: 'Feature name (e.g., user, authentication)?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/logic/{{kebabCase featureName}}/ducks/{{kebabCase featureName}}-slice.js',
        templateFile: 'plop-templates/duck.js.hbs'
      },
      {
        type: 'add',
        path: 'src/logic/{{kebabCase featureName}}/sagas/{{kebabCase featureName}}-saga.js',
        templateFile: 'plop-templates/saga.js.hbs'
      },
      {
        type: 'add',
        path: 'src/logic/{{kebabCase featureName}}/models/{{kebabCase featureName}}-model.js',
        templateFile: 'plop-templates/model.js.hbs'
      },
      {
        type: 'add',
        path: 'src/logic/{{kebabCase featureName}}/api/{{kebabCase featureName}}-api.js',
        templateFile: 'plop-templates/api.js.hbs'
      }
    ]
  });

  // Component Generator
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What type of component?',
        choices: ['atom', 'molecule', 'organism', 'template', 'page'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{type}}s/{{kebabCase name}}/{{kebabCase name}}.component.jsx',
        templateFile: 'plop-templates/component.jsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}s/{{kebabCase name}}/{{kebabCase name}}.component.scss',
        templateFile: 'plop-templates/component.scss.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}s/{{kebabCase name}}/{{kebabCase name}}.component.test.jsx',
        templateFile: 'plop-templates/component.test.jsx.hbs',
      },
    ],
  });
};
