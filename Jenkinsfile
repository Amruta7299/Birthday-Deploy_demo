
pipeline {

    agent any

    stages {

        stage('Checkout Code') {
            steps {
                echo "Repository pulled from GitHub"
            }
        }

        stage('Build') {
            steps {
                echo "Building the project..."
            }
        }

        stage('Package Lambda') {
            steps {
                sh '''
                cd lambda
                zip file.zip lambdafun.py
                '''
            }
        }

        stage('Deploy Lambda') {
            steps {
                sh '''
                aws lambda update-function-code \
                --function-name birthday-site \
                --zip-file fileb://lambda/file.zip
                '''
            }
        }

    }
}
