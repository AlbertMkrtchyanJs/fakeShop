import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as YUP from 'yup'
import { useNavigate } from 'react-router-dom'

import React from 'react'

import style from './Reg.module.css'

const Reg = ({setUsers}) => {


    const regist = (val) => {
        navigate("/")
        setUsers(val)
    }
    const navigate = useNavigate()

    const validaionSchema = YUP.object().shape({
        name : YUP.string().min(3,'Too short!!').max(8,'Too long!!'),
        email: YUP.string().email('Incorrect email!!'),
        password: YUP.string().min(4,'Still short!!')
    }) 

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
        validationSchema={validaionSchema}
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