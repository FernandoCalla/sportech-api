import Admin from '../model/admin.model.js'

export async function createAdmin(input) {
  try {
    const admin = await Admin.create(input)
    return admin
  } catch (error) {
    throw new Error(errorMessage)
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




