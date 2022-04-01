const {readJsonFromFile, writeJsonToFiles} = require("./fs-utils");

const getUsers = () => {
    return readJsonFromFile("users.json")
}

const addUser = async (name) => {
    const users = await getUsers()
    users.push({id: Date.now(), name: name})
    return writeJsonToFiles("users.json", users)
}

exports.getUsers = getUsers
exports.addUser = addUser
