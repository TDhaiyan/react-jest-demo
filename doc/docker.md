

#### summary

https://github.com/Talkdesk/dispositions-ui/pull/499

* package.json add unit test coverage
* check jest config to generate coverage file
* kci config
* docker config
*  Create a new Sonarqube configuration file in the project root directory: sonar-project.properties


link https://talkdesk.atlassian.net/wiki/spaces/INDUSTRIES/pages/4131225827/How+to+integrate+Sonarqube

#### package

```js
 "test:coverage": "yarn test --coverage",
```

#### jest

```js

  "jest": {
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
      "\\.(css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest/mocks/fileMock.js"
    },
    "globals": {
      "__TALKDESK_API_URL__": "https://TEST_API_GATEWAY_URL.com"
    },
    "roots": [
      "<rootDir>/src"
    ],
    "coverageDirectory": "./coverage",
    "coverageReporters": [
      "html",
      "lcovonly"       // new add
    ],
    "coveragePathIgnorePatterns": [
      "/node_modules/",
      "/src/config/"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 90,
        "statements": 95
      }
    }
  },
   // new add
  "jestSonar": {
    "reportPath": "reports",
    "reportFile": "test-reporter.xml",
    "indent": 4
  },
```



#### kci
kci-pipeline.yml

```yml    

    Unit Tests:
      type: tests
      when not:
        - staging
      steps:
        - docker-compose run tests
      send_artifacts:
        - from_path: 'coverage/lcov.info'
      report html: coverage/index.html

    SonarQube:
      type: sonarqube
      when:
        - staging
        - master
        - TAG
      steps:
        - docker-compose run sonarqube
      get_artifacts:
        - from_path: 'coverage/lcov.info'
      QG Wait: true
      Fail Pipeline: true

    SonarQube PR Quality Gate::
      type: sonarqube
      when:
        - staging
        - PR
      steps:
        - docker-compose run sonarqube_pr
      get_artifacts:
        - from_path: 'coverage/lcov.info'
      QG Wait: true
      Fail Pipeline: true

```





#### docker

docker-compose.yml

```yml
  tests:
    <<: *BASE
    command: bash -c 'CI=true yarn test:coverage'
    volumes:
      - ./coverage:/usr/src/app/coverage

  build:
    <<: *BASE
    command: yarn build

  sonarqube:
    image: hub.talkdeskapp.com/sonarsource/sonar-scanner-cli:5.0.1
    command: 
      sonar-scanner 
      -Dproject.settings=/usr/src/app/sonar-project.properties
      -Dsonar.branch.name=${GIT_BRANCH}
    working_dir: /usr/src/app
    volumes:
      - .:/usr/src/app
      - ${PWD}/.scannerwork:/usr/src/app/.scannerwork
    environment:
      - SONAR_HOST_URL=${SONAR_HOST_URL}
      - SONAR_LOGIN=${SONAR_AUTH_TOKEN}
      - SONAR_APPNAME=${APP_NAME}
      - SONAR_BRANCH=${GIT_BRANCH}
      - SONAR_VERSION=${RELEASE_TAG}
      - GIT_BRANCH=${GIT_BRANCH} 

  sonarqube_pr:
    image: hub.talkdeskapp.com/sonarsource/sonar-scanner-cli:5.0.1
    command: 
      sonar-scanner
      -Dproject.settings=/usr/src/app/sonar-project.properties
      -Dsonar.projectBaseDir=/usr/src/app
      -Dsonar.pullrequest.key=PR-${PR_NUMBER}
      -Dsonar.pullrequest.branch=${GIT_BRANCH}
      -Dsonar.pullrequest.base=master
      -Dsonar.newCode.referenceBranch=master
    working_dir: /usr/src/app
    volumes:
      - .:/usr/src/app
      - ${PWD}/.scannerwork:/usr/src/app/.scannerwork
    environment:
      - SONAR_HOST_URL=${SONAR_HOST_URL}
      - SONAR_LOGIN=${SONAR_AUTH_TOKEN}
      - SONAR_APPNAME=${APP_NAME}
      - SONAR_BRANCH=${GIT_BRANCH}
      - SONAR_VERSION=${RELEASE_TAG}
      - GIT_BRANCH=${GIT_BRANCH} 

```