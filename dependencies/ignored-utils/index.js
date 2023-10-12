module.exports = {
    hello: () => "This dependency is created on runtime with rdk.upsertDependency, only exist in project code so typescript will not complain about it, there for we want CLI to ignore this when deploying project. ",
}