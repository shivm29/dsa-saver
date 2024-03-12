import { comparePassword, hashPassword } from "../helpers/authHelpers.js"
import userModel from "../models/userModel.js"
import Jwt from "jsonwebtoken"

export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body

        // if any of the above thing is not available return
        if (!name) return res.send({ message: "Name required", success: "false" })
        if (!email) return res.send({ message: "email required", success: "false" })
        if (!password) return res.send({ message: "password required", success: "false" })

        // check if user already exists ?
        const existingUser = await userModel.findOne({ email })

        // if user already exists
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'User already registered, please login'
            })
        }

        // register user 
        const hashedPassword = await hashPassword(password);
        // save user in the database 
        const user = new userModel({
            name, email, password: hashedPassword
        }).save()

        res.status(201).send({
            success: true,
            message: 'User registered successfully',
        })

    } catch (error) {
        console.log("error", error)
        res.status(400).send({
            success: false,
            message: "Error in user registration"
        })
    }
}



export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email) return res.send({ message: "email required" })
        if (!password) return res.send({ message: "password required" })

        const existingUser = await userModel.findOne({ email })
        // if user doesnot exists , return
        if (!existingUser) {
            return res.status(400).send({
                messsage: "User not found",
                success: false
            })
        }

        // comparing passwords
        const match = await comparePassword(password, existingUser.password)

        const token = Jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" })


        if (!match) {
            return res.status(200).send({
                message: "Invalid creds",
                success: false,
            })
        }

        res.status(201).send({
            message: "Logged in Successfully",
            success: true,
            token
        })

    } catch (error) {
        console.log("error", error)
        res.status(500).send({
            message: "Error in loggin in",
            success: false
        })
    }
}