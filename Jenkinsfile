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
                bat 'docker build -t sachi/myapp-test:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'sachi-docker', variable: 'sachi')]) {
   
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