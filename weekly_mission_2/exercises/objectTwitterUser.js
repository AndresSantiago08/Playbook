const User = {
    name : "Andrés Santiago",
    userName : "AndresSantiago08",
    joinedIn : "April 2013",
    following : 14,
    followers : 10,
    numberTweets : 873,
    getStatus: function(){
        return `The user ${this.userName} has got ${this.followers} followers since ${this.joinedIn}`
    },
    getNameAndTweets: function(){
        return `The user which name is ${this.name} has published ${this.numberTweets} tweets`
    }
}

console.log(User);
console.log(User.getStatus());
console.log(User.getNameAndTweets());