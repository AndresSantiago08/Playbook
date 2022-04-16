class PullRequest {
    constructor(title, repositoryNameAssociated){
        this.title = title;
        this.repositoryNameAssociated = repositoryNameAssociated;
    }

    getInfo(){
        return `"${this.title}" in ${this.repositoryNameAssociated}`
    }

    getStatus(status){
        return `The Pull Request `+ this.getInfo() + ` is still ${status}`
    }

    getTitleAndAuthor(author, dateCreated){
        return `The Pull Request ` + this.getInfo() + ` was made by ${author} in ${dateCreated}`
    }
}

const NewPullRequest = new PullRequest("Enviando_el_blog_de_Andrés_Santiago", "launch-x-explorers");

console.log(NewPullRequest.getInfo());
console.log(NewPullRequest.getStatus("Open"));
console.log(NewPullRequest.getTitleAndAuthor("AndresSantiago08", "april 7, 2022"));