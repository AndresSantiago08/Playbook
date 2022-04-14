const Issue = {
    title: "05 Live 2 Semana 2 [miércole 13 de abril]",
    repositoryNameAssociated: "MissionNodeJS",
    status: "Open",
    numberOfComments: "23",
    labels: ["Finalizado", "Live 2", "Semana-2"],
    author: "carlogilmar",
    dateCreated: "12 de abril",
    lastUpdated: "14 de abril",
    getTitleAndAuthor: function(){
        return this.title + " " +this.author;
    },
    getGeneralInfo: function(){
        return `The "${this.title}" issue was created by ${this.author} in ${this.dateCreated}`
    }
}

console.log(Issue);
console.log(Issue.labels);
console.log(Issue.getTitleAndAuthor())
console.log(Issue.getGeneralInfo())