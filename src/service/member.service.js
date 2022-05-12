import Member from '../model/member.model.js'

export async function createMember(input) {
  try {
    const member = await Member.create(input)
    return member
  } catch (error) {
    throw new Error(errorMessage)
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




