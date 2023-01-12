# Claimer.io Tech Test

This project uses Create React App, TypeScript, TailwindCSS and Vercel.

Testing conducted using Jest, React Testing Library and Cypress.

Working demo available at: [claimer-io.adamcollins.me](https://claimer-io.adamcollins.me)

## Getting started

### 1. Clone the repo

```bash
git clone https://github.com/adxmcollins/claimer-io-tech-test.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development mode

```bash
npm start
```

### 4. Create a production build

```bash
npm run build
```

## Tests

Creating a production build will run all application tests (the build will fail if any tests fail).

If you would like to run tests without building, use the commands listed below.

### Run Cypress test runner

```bash
npm run cypress
```

The Cypress test runner will open a new application window.

### Run Jest test runner

```bash
npm t
```

The Jest test runner will allow you run all application tests.

## Spec

- [x] Built using React & TypeScript
- [x] Working process which asks all the required questions and outputs responses at the end
- [x] Flexible and de-coupled question data/flow from presentation layer
- [x] Full test suite (unit tests and end-to-end tests)
- [x] Choice of mouse or keyboard for submit/back/multiple choice selection
- [x] Transition between questions
- [x] Image transition
- [x] Progress indicator
- [x] Form validation
- [x] Responsiveness
