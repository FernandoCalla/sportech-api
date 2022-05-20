import Member from '../model/member.model.js'
import cloudinary, { uploads } from '../utils/cloudinary.js'

export async function createMember(input) {
  const uploader = async (path) => await uploads(path, 'sportech-members-images')
  try {
    const { url, cloudinaryId } = await uploader(input.file.path)
    const newData={...input.body,photo:url,photoIdCloudinary:cloudinaryId}
    const member = await Member.create(newData)
    return member
  } catch (error) {
    throw new Error(error)
  }
}
export async function findMembers() {
  const members= await Member.find({})
  return members 
}

export async function findMemberById(query) {
  const member= await Member.findById(query)
  return member 
}

export async function findMemberByIdAndEdit(query,data) {
  const member= await Member.findByIdAndUpdate(query,data)
  return member 
}

export async function findMemberByIdAndDelete(query) {
  await Member.findByIdAndDelete(query)
  return "Member deleted"
}




