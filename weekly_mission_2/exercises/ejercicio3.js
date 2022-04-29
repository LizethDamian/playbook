class repo {
    constructor() {
        this.name = "LaunchX",
            this.author = "carlogilmar",
            this.language = "JavaScript",
            this.numberOfCommits = 100,
            this.stars = 199,
            this.forks = 299,
            this.issues_open = 10,
            this.issues_close = 10
    }
    getGeneralInfo() {
        return "El nombre de este repositorio es: " + this.name + " El autor es: " + this.author + " los demas datos son : " +
            "lenguaje: " + this.language + "numero de commits: " + this.numberOfCommits + " stars: " + this.stars + " forks: " + this.forks +
            " issues abiertos: " + this.issues_open + " issues cerrados: " + this.issues_close
    }

}
const repository = new repo()
console.log(repository.getGeneralInfo())

class issue {
    constructor() {
        this.title = "Parte 2"
        this.repositoryNameAssociated = "Proyecto"
        this.numberOfComments = 235
        this.labels = "lives"
        this.author = "Lizeth Damian"
        this.dateCreated = "12/03/2022"
        this.lastUpdated = "27/04/2022"
    }

    getTitleandAuthor() {
        return this.title + this.author
    }
    getGeneralInfo() {
        return `This Issue ${this.name} was created by ${this.author} + with status ${this.status} and the last update was ${this.lastUpdated}`
    }
}
console.log(issue)

class PullRequest {
    constructor() {
        this.title = "About: "
        this.branchName = "practice"
        this.dateCreated = "05/04/2022"
        this.status = "Completado"
        this.repositoryNameAssociated = "Week 2"
    }
    getStatus() {
        return this.status
    }
    getTitle() {
        return this.title
    }
}


class Spotify {
    constructor() {
        this.userName = "Lizeth Damian"
        this.total_playlist = 6
        this.tipo_paquete = "Estudiante"
        this.forma_pago = "credit card"
    }
    getuserName() {
        return this.userName
    }
}