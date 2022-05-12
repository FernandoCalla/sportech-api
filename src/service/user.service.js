import User from '../model/user.model.js'
import bcrypt from 'bcrypt'

const omitPassword = (user) => {
  // eslint-disable-next-line no-unused-vars
  const { password, ...user_ } = user
  return user_
}

export async function createUser(input) {
  try {
    const {email,password,rol}=input
    const hashPassword=await bcrypt.hash(password,10)
    const newUser={email,rol,password:hashPassword}
    const user = await User.create(newUser)
    return omitPassword(user._doc)
  } catch (error) {
    const errorMessage = error.code === 11000 ? 'Email ya registrado' : error
    throw new Error(errorMessage)
  }
}
export async function findUsers(query) {
  const users= await User.find({})
  return users 
}

export async function findUserById(query) {
  const user= await User.findById(query)
  return user 
}


