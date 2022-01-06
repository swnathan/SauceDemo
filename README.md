# SauceDemo
Created Cypress Automation Framework for SauceDemo 

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

## Parallel Execution in Cloud
I have executed the tests parallely in Cloud using Lambdatest

we need to install the LambdaTest-Cypress CLI

install the LambdaTest-Cypress CLI: npm install -g lambdatest-cypress-cli

LambdaTest Cypress configuration file: lambdatest-cypress init  (creates lambdatest-config.json)

 In this configuration file we need to set up your LambdaTest credentials that will help you run your test on the Online Grid (inside )
"auth": {
    "username": "LT_USERNAME",
    "access_key": "LT_ACCESS_KEY"
    },

 browsers & OS configuration: we need to add browser and OS configuration under browsers 

 run_settings: cypress_version, number of parallel sessions can be specified under run_settings

 Execute Tests : lambdatest-cypress run

I have executed the tests in different Environments
LambdaTest Dashboard - https://automation.lambdatest.com/logs/?testID=DAL73-GGOJ8-L401X-QFCHA
