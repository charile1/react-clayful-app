import React from 'react'
import { Link } from 'react-router-dom'

function RegisterPage() {
    return (
        <div className='auth-wrapper'>
            <h1>회원가입</h1>
            <form>
                <input placeholder='Apple ID' type="email" name="email" defaultValue=""></input>
                <input placeholder='암호' type="password" name="password" defaultValue=""></input>
                <button type='submit' className='btn-register'>회원가입</button>
            </form>
           <Link to="login" style={{ color: "gray", textDecoration: "none" }}>{""}이미 Apple ID가 있다면? 지금 로그인.</Link>
        </div>
    )
}

export default RegisterPage
