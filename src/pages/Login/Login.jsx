import { Formik, Form,Field } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'



const Login = ({users}) => {

   const navigate = useNavigate()

    const proverka = (val,users) => {
       const user = users.find((user) => user.email === val.email)
       if (user) {
            let bull = user.password === val.password
           if (bull) {
            navigate('/profile')
           }
       } 
        
    }

  return (
    <div>
        <Formik initialValues={{
            email: '',
            password: ''
        }}
        onSubmit={(val)=> proverka(val,users)}
        >
            <Form>
                <Field name='email' placeholder='Email'/>
                <Field name='password' type='password' placeholder='Password'/>
                <button type='submit'>Login</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Login