import { createAdmin, findAdminById, findAdminByIdAndDelete, findAdminByIdAndEdit, findAdmins } from '../service/admin.service.js'

export async function createAdminHandler(req, res) {
  try {
    const admin = await createAdmin(req)
    res.status(201).json({ message: 'Admin created', admin })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findAdminsHandler(req, res) {
  try {
    const admins = await findAdmins()
    res.status(200).json({ message: 'Admins retrived', admins })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findAdminByIdHandler(req, res) {
  try {
    const admin = await findAdminById(req.params.id)
    res.status(200).json({ message: 'Admin retrived', admin })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findAdminByIdAndEditHandler(req, res) {
  try {
    const admin = await findAdminByIdAndEdit(req.params.id)
    res.status(200).json({ message: 'Admin edited', admin })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findAdminByIdAndDeleteHandler(req, res) {
  try {
    const message = await findAdminByIdAndDelete(req.params.id)
    res.status(200).json({ message})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
