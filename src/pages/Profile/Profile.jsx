import React from 'react'
import { useLocation } from 'react-router-dom'
import s63 from '../../assets/s63.jpg'
import style from './Profile.module.css'

const Profile = () => {
    const {state} = useLocation()
  return (
    <>
        <>
        <h1>My Profile</h1>
        </>
        <div className={style.prof}>
        <h2>{state?.name}</h2>
        <img className={style.img} src={s63} width={300} />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ab omnis itaque dolores eum suscipit voluptatibus aliquam molestiae, illo recusandae.</p>
        </div>
    </>
  )
}

export default Profile