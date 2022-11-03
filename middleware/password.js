function password(req, res, next) {
    if(req.query.password === 'pavisoso15') {
        next()
    } else {
        res.send('Error password not found')
    }
}

module.exports = { password }