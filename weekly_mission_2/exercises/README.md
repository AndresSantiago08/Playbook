# Ejercicios

### Ejercicio 1.1 (objectIssue.js)
Modela los siguientes diagramas en objetos de JS:

```mermaid
classDiagram
    class Issue
    Issue : +title
    Issue : +repositoryNameAssociated
    Issue : +status
    Issue : +numberOfComments
    Issue : +labels
    Issue : +author
    Issue : +dateCreated
    Issue : +lastUpdated
    Issue : +getTitleAndAuthor()
    Issue : +getGeneralInfo()
```
---
### Ejercicio 1.2 (objectPullRequest.js)
Modela los siguientes diagramas en objetos de JS:

```mermaid
classDiagram
    class PullRequest
    PullRequest : +title
    PullRequest : +branchName
    PullRequest : +dateCreated
    PullRequest : +status
    PullRequest : +repositoryNameAssociated
    PullRequest : +getStatus()
    PullRequest : +getTitleAndAuthor()
```

### Ejercicio 1.3 (objectTwitterUser.js)
Modela los siguientes diagramas en objetos de JS:

```mermaid
classDiagram
    class Twitter
    Twitter : +name
    Twitter : +userName
    Twitter : +joinedIn
    Twitter : +following
    Twitter : +followers
    Twitter : +numberTweets
    Twitter : +getStatus()
    Twitter : +getNameAndTweets()
```
