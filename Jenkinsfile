pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''npm i
npm run build
'''
      }
    }

    stage('Deploy') {
      steps {
        sh 'aws s3 cp /var/lib/jenkins/workspace/exam-pro-frontend_master/build s3://exam--pro --recursive --acl public-read'
      }
    }

  }
}