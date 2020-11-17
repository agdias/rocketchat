db.auth('$MONGODB_INITDB_ROOT_USERNAME','$MONGODB_INITDB_ROOT_PASSWORD')
db = db.getSiblingDB('rocketchat')
db.getUsers()


