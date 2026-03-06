pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/yourrepo/birthday-devops-project.git'
            }
        }

        stage('Terraform Init') {
            steps {
                sh 'cd terraform && terraform init'
            }
        }

        stage('Terraform Apply') {
            steps {
                sh 'cd terraform && terraform apply -auto-approve'
            }
        }

        stage('Deploy Website') {
            steps {
                sh 'aws s3 sync website/ s3://amruta-birthday-site'
            }
        }
    }
}

