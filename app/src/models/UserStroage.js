"use strict";

class UserStorage {
    static #users = {
        id: ["jkh", "electroman", "electrohyun"],
        psword: ["1234", "1", "12"],
        name: ["정기현", "전기맨", "전기현"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});;
        return newUsers;
    }
}

module.exports = UserStorage;