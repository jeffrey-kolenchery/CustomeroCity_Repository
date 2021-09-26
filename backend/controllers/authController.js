// const expressJwt = require("express-jwt");
import expressJwt from "express-jwt" // For authorization check

// 1.
/** **************************************************************************************************************** */
// Middleware for checking if user is using a valid jwt.
/** **************************************************************************************************************** */
// It then decrypts the jwt token, then places it in whatever parameter we put for userProperty.
// E.g. In this case, request.auth.
const requireSignin = expressJwt({
	secret: "verysecretValue",
	algorithms: ["HS256"], // added later
	userProperty: "auth",
})

// 2.
/** **************************************************************************************************************** */
// Middleware that checks if the decrypted token contains the id that matches the id of the request user.
/** **************************************************************************************************************** */
// E.g. To check if the token that is being used to access some user's data, is actually that person's token.
const isAuth = (req, res, next) => {
	console.log(req.profile._id, req.auth._id)
	console.log(req.auth)
	// req.profile to access the _id of the username that was used for the login attempt.
	// req.profile was saved using the findByUserId middleware in userController.
	// req.auth is the data from the decrypated authentication token saved by expressJwt() middleware.
	const user = req.profile && req.auth && req.profile._id === req.auth._id
	if (!user) {
		return res.status(403).json({
			error: "Access denied",
		})
	}
	next()
}

// 3.
/** **************************************************************************************************************** */
// Checks if the requested profile is an admin profile or not.
/** **************************************************************************************************************** */
const isAdmin = (req, res, next) => {
	console.log(req.profile)
	if (req.profile.role === 0) {
		return res.status(403).json({ error: "Admin resource! Access denied" })
	}
	next()
}

export { requireSignin, isAuth, isAdmin }
