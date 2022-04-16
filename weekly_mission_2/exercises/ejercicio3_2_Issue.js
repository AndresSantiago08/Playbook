class Issue {
    constructor(title, repositoryNameAssociated, author){
        this.title = title,
        this.repositoryNameAssociated = repositoryNameAssociated,
        this.author = author
    }

    getTitleAndAuthor(){
        return this.title + " " +this.author;
    }

    getGeneralInfo(dateCreated){
        return `The "${this.title}" issue was created by ${this.author} in ${dateCreated}`
    }

    getMoreInfo(dateCreated, status, numComments){
        return this.getGeneralInfo(dateCreated) + `, the status is ${status} and it has ${numComments} comments`
    }
}

const NewIssue = new Issue("05 Live 2 Semana 2 [miércole 13 de abril]", "MissionNodeJS", "carlogilmar");

console.log(NewIssue.getTitleAndAuthor())
console.log(NewIssue.getGeneralInfo("12 de abril"))
console.log(NewIssue.getMoreInfo("12 de abril", "open", 23))