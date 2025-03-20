import { Formik,Form,Field,ErrorMessage} from 'formik'
import { useNavigate } from 'react-router-dom'

import React, { useContext } from 'react'

import style from './Reg.module.css'
import { MyContext } from '../../context/myContext'

const Reg = () => {

    const {valid} = useContext(MyContext)
    const regist = (val) => {
        navigate("/")
        setUsers((prev) => [...prev,val])
    }
    const navigate = useNavigate()

    

  return (
    <div>
        <h2>Register Now!</h2>
        <Formik
        initialValues={{
            name: '',
            email: '',
            password: ''
        }}
        onSubmit={regist}
        validationSchema={valid}
        >
            {()=>(
                <Form className={style.regForm}>
                    <Field className={style.input} name='name' placeholder='Name'/>
                    <ErrorMessage name='name' component='p'/>
                    <Field className={style.input} name='email' placeholder='Email'/>
                    <ErrorMessage name='email' component='p'/>
                    <Field className={style.input} type='password' name='password' placeholder='Password'/>
                    <ErrorMessage name='password' component='p'/>
                    <button className={style.butt} type='submit' >Register</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default Reg