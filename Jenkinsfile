pipeline {
    agent any

    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlifytoken2')
        NETLIFY_SITE_ID = '9a577c91-aca4-4eac-b13d-8d33ab354921'
    }

    stage('Debug') {
    steps {
        sh '''
            echo "Checking environment"
            which node
            docker --versionx`
            docker ps
        '''
    }
}

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:22.14.0'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    node -v
                    npm -v
                    npm ci
                    npm run build
                '''
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:22.14.0'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    test -f build/index.html
                    npm test -- --watchAll=false
                '''
            }
        }

        
    }
}
