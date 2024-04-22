pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/sweerasingha/4267-Weerasingha'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t sweerasingha/myapp-test:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'test-dockerhubpassword', variable: 'sachi-docker')]) {
   
                bat'docker login -u sweerasingha -p ${Sachi4267}'
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push sachi/myapp-test:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}