import jwt from 'jsonwebtoken'

function ensureAuthenticated(req, res, next) {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' })
    }
    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, function(err, decoded) {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' })
        }
        req.userId = decoded.id
        next()
    })
}

export default ensureAuthenticated