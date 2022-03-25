const users = [
    {"id": 1, "name": "A"},
    {"id": 2, "name": "C"}
]

const getUsers = () => {
    return users
}

const addUser = (name) => {
    users.push({id: Date.now(), name: name})
}

exports.getUsers = getUsers
exports.addUser = addUser
