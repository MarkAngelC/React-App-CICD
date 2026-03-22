pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-token')
        NETLIFY_SITE_ID = 'your-site-id'
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
