// const sessionIdToUserMap = new Map();//previously we were using this so that we can have sessions but the problem with this was that if we refresh or cut the tab then our sessio would have got lost so to avoid that we need JWT

const jwt = require("jsonwebtoken");

const secret = "topNotchSecret";

function setUser(user) {
    // sessionIdToUserMap.set(id, user);

    return jwt.sign({
        id: user._id,
        ...user,
    }, secret);
}

function getUser(token) {
    // return sessionIdToUserMap.get(id);
    if (!token) return null;
    try {
        return jwt.verify(token, secret)
    } catch (err) {
        return null;
    }
    // return null;
}


module.exports = {
    setUser, getUser
}