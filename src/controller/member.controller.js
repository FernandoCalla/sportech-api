import { createMember, findMemberById, findMemberByIdAndDelete, findMemberByIdAndEdit, findMembers } from '../service/member.service.js'

export async function createMemberHandler(req, res) {
  try {
    const member = await createMember(req.body)
    res.status(201).json({ message: 'Member created', member })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findMembersHandler(req, res) {
  try {
    const members = await findMembers()
    res.status(200).json({ message: 'Members retrived', members })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findMemberByIdHandler(req, res) {
  try {
    const member = await findMemberById(req.params.id)
    res.status(200).json({ message: 'Member retrived', member})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findMemberByIdAndEditHandler(req, res) {
  try {
    const member = await findMemberByIdAndEdit(req.params.id)
    res.status(200).json({ message: 'Member edited', member })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findMemberByIdAndDeleteHandler(req, res) {
  try {
    const message = await findMemberByIdAndDelete(req.params.id)
    res.status(200).json({ message})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
