pipeline {
    agent any

    environment {
        NETLIFY_AUTH_TOKEN = credentials('myreactapp2')
        NETLIFY_SITE_ID = '148ac007-e9b6-4256-b856-bd55ef5c6a0c'
    }

    stages {
        stage('Build') {
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm install
                    npm run build
                    ls -la
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                    test -f build/index.html
                    npm test -- --watchAll=false
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    npm install netlify-cli
                    npx netlify --version
                    echo "Site ID: $NETLIFY_SITE_ID"
                    npx netlify status --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH_TOKEN
                    npx netlify deploy --prod --dir=build --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH_TOKEN
                '''
            }
        }
    }
}
