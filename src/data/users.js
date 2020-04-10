const mongoCollections = require('./mongoCollections');
const users = mongoCollections.users;
const { ObjectId } = require("mongodb").ObjectId;

async function createFoodInstance(UserId, weight = null, height = null, targetToBeAchieved = null, current = null) {
    if (!UserId) throw "You must provide your name for your acocunt";

    const userCollection = await users();

    let newUser = {
        userId: UserId,
        weight: weight,
        food: [],
        height: height,
        targetToBeAchieved: targetToBeAchieved,
        current: current,
        water:
        {
            waterGoal: null,
            waterCurrent: null
        }

    }

    const insertInfo = await userCollection.insertOne(newUser);
    if (insertInfo.insertedCount === 0) throw "Could not create food instance for user";

    const newId = insertInfo.insertedId;
    const user1 = await getUserById(newId);
    return user1;

}

async function getUserById(id) {
    const userCollection = await users();
    const user = await userCollection.findOne({ _id: ObjectId(id) });
    if (!user) throw 'User not found';
    return user;
}

async function getUserByUserName(userName) {
    const userCollection = await users();
    const user = await userCollection.findOne({ userName: userName });
    if (!user) throw 'Account with that username not found';
    return user;
}

async function getAllUsers() {
    const userCollection = await users();
    const a1 = await userCollection.find({}).toArray();
    if (!a1) throw "No users are in database";
    return a1;
}


module.exports = {
    getUserById,
    createFoodInstance,
    getUserByUserName,
    getAllUsers
}