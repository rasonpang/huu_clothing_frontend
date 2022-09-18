import inquirer from 'inquirer';
import fs from 'fs';

const settings = {};

inquirer.prompt({
    name: "target",
    message: "Select target:",
    type: "list",
    choices: ["Store"]
}).then(({ target }) => {
    settings.target = target;
    inquirer.prompt({
        name: "name",
        message: "Enter a name:",
        type: "input"
    }).then(({ name }) => {
        settings.name = name;
    }).finally(() => {
        console.log(settings);
        make();
    });
});

async function make() {
    const targetName = settings.target.toLowerCase();
    const { template } = await import(`./scripts/generator/templates/${targetName}.js`);
    const content = template(settings.name);
    const filePath = `./src/${targetName}s/${settings.name}.js`;
    fs.writeFileSync(filePath, content);
}