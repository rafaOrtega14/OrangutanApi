function password(req, res, next) {
    if(req.query.password === process.env.ADMIN_PASS) {
        next()
    } else {
        res.send('Error password not found' + req.query.password + process.env.ADMIN_PASS)
    }
}

module.exports = { password }
