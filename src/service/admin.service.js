import Admin from '../model/admin.model.js'
import cloudinary, { uploads } from '../utils/cloudinary.js'

export async function createAdmin(input) {
  const uploader = async (path) => await uploads(path, 'sportech-admin-images')
  try {
    const { url, cloudinaryId } = await uploader(input.file.path)
    const newData={...input.body,photo:url,photoIdCloudinary:cloudinaryId}
    const admin = await Admin.create(newData)
    return admin
  } catch (error) {
    throw new Error(error)
  }
}
export async function findAdmins(query) {
  const admins= await Admin.find({})
  return admins 
}

export async function findAdminById(query) {
  const admin= await Admin.findById(query)
  return admin 
}

export async function findAdminByIdAndEdit(query,data) {
  const admin= await Admin.findByIdAndUpdate(query,data)
  return admin 
}

export async function findAdminByIdAndDelete(query) {
  await Admin.findByIdAndDelete(query)
  return "Admin deleted"
}




