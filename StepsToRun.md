# Steps to Run the Automation Tests
Download or clone this repo
Install dependencies by running the following command in terminal

## Description
npm i -g yarn
yarn install

## Run tests in Command Line
yarn clean
yarn test

## Verify Reports in Directory
HTML Reports will be in /reports Directory
sample reports pushed in the directory

## Verify Screenshots
Once Tests are Executed Screenshot is generated in screenshot/testcases Directory

## Verify Videos
Once Tests are Executed Videos is generated in videos  Directory

## Tests Running in Different Browsers
In Package.json under scripts
"scripts": "npx cypress run --headless  --browser chrome --spec \"cypress/integration/testcases/SauceDemo*_Spec.js\"",
browser  can be changed to different browsers (Example: firefox,edge)

## CI/CD Integration
I have created Jenkins pipeline Scripts to Execute the Tests
we just need to have Cypress Docker Image Installed in The Machine so we can update the name in agent label 
