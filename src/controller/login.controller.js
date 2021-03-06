import User from '../model/user.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export async function loginHandler(req, res) {
        const {body}=req
        const{email,password}=body
        if(email==="" || password===""){  res.status(400).json({ message: "usuario no puede entrar" })
        }
        else{
            const user=await User.findOne({email})
            const passwordCorrect = user === null ? false : await bcrypt.compare(password,user.password);
            if(!(user && passwordCorrect)){
                res.status(400).json({ message: "usuario no puede entrar" })
            }
            else{
                const userToken={
                    id:user._id,
                    email:user.email,
                    rol:user.rol,
                }
                const token=jwt.sign(userToken,process.env.SECRET,{expiresIn:60*60*24*7})
                res.status(200).json({
                    id:user._id,
                    email:user.email,
                    rol:user.rol,
                    token:token
                })}
            }
                    
  }