module.exports = (req, res, next) => {
    if(!req.user){
        return res.status(401).send({error: 'You must log in!'});
    }
    next(); //alt går grei, la bruker gå videre til request handler
};