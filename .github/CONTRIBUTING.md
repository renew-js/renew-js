# Contributing to Renew-js

We'd love to accept your patches and contributions to this project.

## Setting up your environment

Clone the `renew-lib` and the `renew-ui` and run `npm install` in it. 
Afterwards you can run `npm run serve` in the `renew-ui` to start your development server.

```bash
git clone https://github.com/renew-js/renew-lib
git clone https://github.com/renew-js/renew-ui
cd renew-lib
npm install
cd ../renew-ui
npm install
npm run serve
```
You probably want to develop the `renew-lib` with the webpack hot reload feature from the `renew-ui`. 
So its recommended to create a directory link from `renew-ui/node_modules/renew-lib` to `renew-lib`.
In Windows it's something like this:
```bat
rmdir /S renew-ui/node_modules/renew-lib
mklink /J renew-ui/node_modules/renew-lib renew-lib
```
When you're done with it, you are good to go.

## Working with issues

Create an issue for each task, feature, question or bug you notice.
This issue will be used to discuss the requested topic. 
You should reference it in every related sitation, 
for example in a commit-message, a pull request and in related issues. 
It helps the project communication, documentation and planning. 

## Coding style

We've set up an eslint with serval rules. Make sure to follow them before you commit your changes.

## Commit messages

Make sure you follow the guidelines for good commit messages. https://chris.beams.io/posts/git-commit/

## Test your code

For each module there should be a Software test. You mainly try to test the
different components provider, behavior, commands, tools and rules. 
The test begins with a module definition and the Target
specification.
```javascript
describe('modules/{name} - {Target}', () => { /** ... */ });
```
Then you define the Test environment only with the minimum amount of 
dependencies.
```javascript
let diagram;
beforeEach(() => diagram = new Tester({ modules: [ /** ModuleName */ ] }));
```
Afterwards you can define more dependencies that should be dependency injected
and also create some shapes for a specific scenario later on. You should write
a 'it should be defined' test to be sure your module is loading properly. Then 
you begin describing the Tests for the different components like for example:
```javascript
describe('Provider', () => { /** ... */ });
```  
