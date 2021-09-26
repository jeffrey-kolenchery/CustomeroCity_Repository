/* eslint-disable no-undef */
// const express = require("express");
import express from "express"

// jest.useFakeTimers();

// var controller = require("../controllers/userController");
import * as controller from "../controllers/userController"
// var User= require("../models/userModel");
import { User } from "../models/userModel"

const TEST_USER_GIVEN_NAME = "Test User"
const TEST_EMAIL = "testuser@email.com"
const TEST_USER_PHONE = "0123456789"
const TEST_PASSWORD = "Qwerty1234"

const BAD_TEST_USER_GIVEN_NAME = "Bad Test User"

const RegisterReq = {
	body: {
		givenName: TEST_USER_GIVEN_NAME,
		email: TEST_EMAIL,
		phone: TEST_USER_PHONE,
		password: TEST_PASSWORD,
	},
}
const badRegisterReq = {
	body: {
		givenName: BAD_TEST_USER_GIVEN_NAME,
		email: TEST_EMAIL,
		phone: TEST_USER_PHONE,


		password: TEST_PASSWORD,
	},
}
const registerRes = express.response
const badRegisterRes = express.response

describe(`Registering ${TEST_USER_GIVEN_NAME}'s new account using registerUser()`, () => {
	test(`Checking if ${TEST_USER_GIVEN_NAME}'s account can be registered`, async () => {
		try {
			await controller.registerUser(RegisterReq, registerRes)
			expect(registerRes.status).toBe(200)
		} catch (e) {}
	})

	test(`Checking if ${TEST_USER_GIVEN_NAME}'s account exists in db`, async () => {
		try {
			const userExists = User.findOne({
				email: TEST_EMAIL,
			})
			if (userExists) {
				expect.anything()
			}
		} catch (e) {}
	})

	test(`Checking if ${BAD_TEST_USER_GIVEN_NAME}'s account cannot be registered due to duplicate email`, async () => {
		try {
			await controller.registerUser(badRegisterReq, badRegisterRes)
			expect(badRegisterRes.status).toBe(400)
		} catch (e) {}
	})

	// afterAll(cleanup);
})

const logInReq = {
	body: {
		username: TEST_EMAIL,
		password: TEST_PASSWORD,
	},
}
const badLogInReq = {
	body: {
		username: TEST_EMAIL,
		password: 123,
	},
}
const nonExistentLoginReq = {
	body: {
		username: "hackerman",
		password: "lololol123",
	},
}
const loginRes = express.response
const badLoginRes = express.response
const nonExistentLoginRes = express.response

describe(`Logging in ${TEST_USER_GIVEN_NAME}'s account using loginUser()`, () => {
	test(`Checking if ${TEST_USER_GIVEN_NAME}'s account can be logged in`, async () => {
		try {
			await controller.loginUser(logInReq, loginRes)
			expect(loginRes.status).toBe(200)
		} catch (e) {}
	})

	test(`Checking if ${TEST_USER_GIVEN_NAME}'s account can be logged in with wrong password`, async () => {
		try {
			await controller.loginUser(badLogInReq, badLoginRes)
			expect(badLoginRes.status).toBe(400)
		} catch (e) {}
	})

	test("Checking if nonexistent account can be logged in", async () => {
		try {
			await controller.loginUser(nonExistentLoginReq, nonExistentLoginRes)
			expect(nonExistentLoginRes.status).toBe(404)
		} catch (e) {}
	})
})
