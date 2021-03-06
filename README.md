# Express React Boilerplate

It is a Boilerplate starter kit for Javascript application with [Express](https://expressjs.com "ExpressJS") in backend and [React](https://reactjs.org "ReactJS") (Typescript) in frontend bootstrapped with [lerna](https://github.com/lerna/lerna "Lerna").

front-end and back-end both uses `ESlint` for JavaScript common syntax errors and `Prettier` for code styling issues and automatically reformats your code to ensure consistent rules are being followed.

***
### Getting Started :zap:
1. install `lerna` globally -> `npm install -g lerna`
2. Clone the repo -> `git clone https://github.com/rohit-ambre/express-react-lerna.git`
2. Install dependencies -> `lerna bootstrap`
3. Create `.env` file in client package -> `cp .env.example .env` 
// (sets react `PORT=5000` and `SKIP_PREFLIGHT_CHECK=true` and `CI=true` [CRA issue](https://github.com/facebook/create-react-app/issues/8685 "lerna issue"))
4. Start the app -> `npm run start`

There you go :tada:

***
### Available scripts :page_facing_up:

##### `npm run start`
Runs both frontend and backend packages in `development` mode.


##### `npm run lint`
Runs lint command in both server and client package.


##### `npm run lint:fix`
Runs lint fix command in both server and client package.

***
### License :white_check_mark:
[The MIT License](LICENSE.md)
