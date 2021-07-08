
const handlers = require('./handlers/index')

module.exports = {
    user: async (event, context,callback) => handlers.user(event, context,callback),
    createRecord: async (event, context) => handlers.createRecord(event, context),
    updateUser: async (event, context) => handlers.updateUser(event, context),
    deleteUser: async (event, context) => handlers.deleteUser(event, context)
}
