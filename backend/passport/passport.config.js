import passport from "passport";
import bcrypt from "bcryptjs"; //used to hash the passwords

import User from "../models/user.model.js";
import { GraphQLLocalStrategy } from "graphql-passport";

export const configurePassport = async () => {
    // is taking user and a callback called done as args
    // when we send a login or signup request this function will run and print the log
	passport.serializeUser((user, done) => {
		console.log("Serializing user");
		done(null, user.id);
	});

	passport.deserializeUser(async (id, done) => {
		console.log("Deserializing user");
		try {
			const user = await User.findById(id);
			done(null, user);
		} catch (err) {
			done(err);
		}
	});

    // passport middleware
	passport.use(
		new GraphQLLocalStrategy(async (username, password, done) => {
			try {
				const user = await User.findOne({ username });
				if (!user) {
					throw new Error("Invalid username or password");
				}
                // validating the password here using bcrypt hashing
                // password is the one user entered and user.password is the one saved in the database
				const validPassword = await bcrypt.compare(password, user.password);

				if (!validPassword) {
					throw new Error("Invalid username or password");
				}

				return done(null, user);
			} catch (err) {
				return done(err);
			}
		})
	);
};
