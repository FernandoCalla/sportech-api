import { createUser, findUsers ,findUserById} from '../service/user.service.js'

export async function createUserHandler(req, res) {
  try {
    const user = await createUser(req.body)
    res.status(201).json({ message: 'User created', user })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findUsersHandler(req, res) {
  try {
    const users = await findUsers()
    res.status(200).json({ message: 'Users retrived', users })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findUsersByIdHandler(req, res) {
  try {
    const user = await findUserById(req.params.id)
    res.status(200).json({ message: 'Users retrived', user })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
