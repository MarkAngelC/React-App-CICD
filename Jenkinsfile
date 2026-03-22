pipeline {
    agent any

    tools {
        nodejs 'node' 

    environment {
        NETLIFY_AUTH_TOKEN = credentials('nfp_JjzeRR2YaP9Vy4YzwS255CUPT41TCayncb5c')
        NETLIFY_SITE_ID = 'https://react-app-cicd.netlify.app/'
    }

    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test -- --watchAll=false'
            }
        }

        stage('Deploy') {
            steps {
                bat """
                npm install netlify-cli -g
                netlify deploy --dir=build --prod --auth %NETLIFY_AUTH_TOKEN% --site %NETLIFY_SITE_ID%
                """
            }
        }
    }
}