//Tabla 1: resuelto por el MC
const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function() {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

//Tabla 2

const issue = {
    title: "Parte 2",
    repositoryNameAssociated: "Proyecto",
    status: "Procesando",
    numberOfComments: 235,
    labels: "lives",
    author: "Lizeth Damian",
    dateCreated: "12/03/2022",
    lastUpdated: "27/04/2022",

    getTitleandAuthor: function() {
        return this.title + this.author
    },
    getGeneralInfo: function() {
        return `This Issue ${this.name} was created by ${this.author} + with status ${this.status} and the last update was ${this.lastUpdated}`
    },
}

console.log("Titulo y Autor del issue:" + issue.getTitleandAuthor)
console.log("Comments totales: " + issue.numberOfComments)
console.log(issue.getGeneralInfo())

//tabla 3

const PullRequest = {
    title: "About: ",
    branchName: "practice",
    dateCreated: "05/04/2022",
    status: "Completado",
    repositoryNameAssociated: "Week 2",
    getStatus: function() {
        return this.status
    },
    getTitle: function() {
        return this.title
    },
}

console.log("Estatus:" + PullRequest.getStatus())
console.log(PullRequest.getTitle())

//Modelacion de una red social: Spotify

const Spotify = {
    userName: "Lizeth Damian",
    total_playlist: 6,
    tipo_paquete: "Estudiante",
    forma_pago: "credit card",
    getuserName: function() {
        return this.userName
    },

}

console.log("Este es el ejercicio 1:")
console.log("En spotify mi nomre de usuario es: " + Spotify.getuserName())
console.log("Tengo un total de " + Spotify.total_playlist + " playlist, con un paquete tipo:  " + Spotify.tipo_paquete)