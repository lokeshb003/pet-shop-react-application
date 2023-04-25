pipeline {
  agent any
  stages {
    stage("Checkout the git repository") {
      steps {
      
        git branch: 'master',credentialsId: '$CREDENTIALS',url: 'https://github.com/lokeshb003/pet-shop-react-application.git'
      }
    }
    stage("Build Docker Image and pushing Docker Image") {
      steps {
        sh "Building Docker Image"
        script {
          def app = docker.build("lokeshb003/petshop-react-app:latest")
          app.push()
        }
      }
    }
    stage("Scanning the artifacts for vulnerabilities") {
      steps {
        sh 'docker scan lokeshb003/petshop-react-app:latest'
      }
    }
  }
}
