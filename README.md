# Tested Typescript Boilerplate
A minimal boilerplate that supports in-browser and node tests. 

## Install
Run `yarn`

## Development
Run `yarn start`. Then navigate to `http://localhost:8080/webpack-dev-server`. Select your bundle. 

- `test` will run all the browser tests you have in your test folder
- `main` will load whatever you've imported to `index.ts` in the src folder

## Testing
For tests that you don't want run in the browser, use `npm run test:node`. This will run any tests that have the format `*.node-spec.ts`