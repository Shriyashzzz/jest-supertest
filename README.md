libraries needed to run jest with supertest:

## Core testing:

`npm install --save-dev jest supertest`

## Type definitions (since you're writing tests in TS):

`npm install --save-dev @types/jest @types/supertest`

## Babel transform pipeline (lets Jest run your .ts files):

`npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-typescript`
