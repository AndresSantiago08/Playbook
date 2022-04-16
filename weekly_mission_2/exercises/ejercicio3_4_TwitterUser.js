class TwitterUser {
    constructor(name, username){
        this.name = name;
        this.username = username;
    }

    get getName(){
        return this.name;
    }

    set setName(NewName){
        this.name = NewName;
    }

    getInfo(){
        return `User ${this.name}, with username: ${this.username}`
    }
}

class TwitterInfo extends TwitterUser{
    constructor(name, username, joinedIn){
        super(name, username)
        this.joinedIn = joinedIn;
    }

    getStatus(followers){
        return this.getInfo() + ` has got ${followers} followers since ${this.joinedIn}`
    }

    getNumberTweets(numberTweets){
        return this.getInfo() + ` has published ${numberTweets} tweets`
    }
}

// Llamar a la clase TwitterUser
const NewUser = new TwitterUser("Andres Santiago", "A_Santiago_5");
// Mostrar nombre
console.log(NewUser.getInfo());
// Cambiar nombre
NewUser.setName = "A. Santiago";
// Mostrar la información
console.log(NewUser.getName);
// Guardar nuevo nombre
const NewName = NewUser.getName;
// Llamar a la clase TwitterInfo
const MoreInfo = new TwitterInfo(NewName, "A_Santiago_5", "April 2013");
// Mostrar método getStatus
console.log(MoreInfo.getStatus(10));
// Mostrar método getNumberTweets
console.log(MoreInfo.getNumberTweets(875));