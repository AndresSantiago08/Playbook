const PullRequest = {
    title: "Enviando_el_blog_de_Andrés_Santiago",
    branchName: "origin/main",
    dateCreated: "april 7, 2022",
    status: "Open",
    repositoryNameAssociated: "launch-x-explorers",
    getStatus: function(){
        return `The Pull Request named ${this.title} is still ${this.status}`
    },
    getTitleAndAuthor: function(author){
        return `The pull request ${this.title} was made by ${author}`
    }
}

console.log(PullRequest);
console.log(PullRequest.repositoryNameAssociated);
console.log(PullRequest.getStatus());
console.log(PullRequest.getTitleAndAuthor("AndresSantiago08"));