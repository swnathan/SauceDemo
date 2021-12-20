#!groovy

pipeline {
    agent { 
        label 'cypress'
    }

    environment {
        DEFAULT_BRANCH = 'master'
    }

     parameters {
        string(
            name: 'Specfile',
            defaultValue:"cypress/integration/testcases/SauceDemo*_Spec.js",
            description: "Spec files")

            string(
            name: 'Browser',
            defaultValue:"chrome",
            description: "browser") 

            string(
            name: 'url',
            defaultValue:"https://www.saucedemo.com/",
            description: "Application URL")  
            
     }


     stages {
        stage('Build') {
            steps {

                nodejs(nodeJSInstallationName: '10-lts') {
                        sh 'sudo npm i -g yarn'
                        sh 'npm install'
                        sh 'npm cache verify'
                        sh 'npm clean-install'
                        sh 'cypress run --env baseurl=${url} --headless --browser ${Browser} --spec "${Specfile}"'
             }
            }
        }
     }

     post {
         
         failure {
             sh 'npm test'
           archiveArtifacts artifacts: 'cypress/**/*' 
           publishHTML([     
               keepAll: true,
               alwaysLinkToLastBuild: true,
               allowMissing: true,
               reportDir: 'mochawesome-report',
               reportFiles: 'mochawesome.html',
               reportName: 'mochawesomeReport',
               reportTitles: '']) 
           emailext body: '$PROJECT_NAME - $BUILD_NUMBER - $BUILD_STATUS - Check console output at $BUILD_URL to view the results',
           subject: '$PROJECT_NAME - $BUILD_NUMBER - $BUILD_STATUS',
           to: "swnathan@gmail.com"

       }
       success {
           sh 'npm test'
           archiveArtifacts artifacts: 'cypress/**/*' 
           publishHTML([     
               keepAll: true,
               alwaysLinkToLastBuild: true,
               allowMissing: true,
               reportDir: 'mochawesome-report',
               reportFiles: 'mochawesome.html',
               reportName: 'mochawesomeReport',
               reportTitles: '']) 
           emailext body: '$PROJECT_NAME - $BUILD_NUMBER - $BUILD_STATUS - Check console output at $BUILD_URL to view the results',
           subject: '$PROJECT_NAME - $BUILD_NUMBER - $BUILD_STATUS',
           to: "swnathan@gmail.com"

       }
         
     }
}