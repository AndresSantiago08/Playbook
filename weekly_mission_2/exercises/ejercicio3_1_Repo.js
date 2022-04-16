class Repo {
    constructor(name, author){
        this.name = name,
        this.author = author,
        this.language = "JavaScript",
        this.numberOfCommits = 100,
        this.stars = 199,
        this.forks = 299
        //this.issues_open = 10,
        //this.issues_close = 10
    }

    getTotalIssues(issues_open, issues_close){
        return issues_open + issues_close
    }

    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`
      }
}

const NewRepo = new Repo("LaunchX", "carlogilmar");

console.log("Nombre del repo: " + NewRepo.name)
console.log("Issues totales: " + NewRepo.getTotalIssues(10, 20))
console.log(NewRepo.getGeneralInfo())