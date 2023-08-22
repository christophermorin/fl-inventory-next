"use client"
import { ChangeEvent, useState } from "react"
import axios from "axios";  

type FormValue = {
  name: string,
  email: string,
  password: string,
  confirmation: string
}

export function RegisterForm () {
  const [formValues, setFormValues] = useState<FormValue>({
    name: "",
    email: "",
    password: "",
    confirmation: ""
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const res = await axios.post("https://localhost:3000/api/register/", formValues)
      
    } catch (error: any) {
      // I don't want this as any
      // Store errors in a state?
      console.log(error.response.data)
    }
  }
  
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
  }))
}
    
  return (
    <div>
    <form>
      <input type="text" name="name" value={formValues.name} onChange={onChange}/>
      <input type="email" name="email" value={formValues.email} onChange={onChange}/>
      <input type="password" name="password" value={formValues.password} onChange={onChange}/>
      <input type="password" name="confirmation" value={formValues.confirmation} onChange={onChange}/>
    </form>
    <button onClick={handleSubmit}>Click</button>
    </div>
  )
}