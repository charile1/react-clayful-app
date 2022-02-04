import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import clayful from 'clayful/client-js'

function RegisterPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // input이 onchange할때마다 handleEmailChange 함수 발생 
    const handleEmailChange = (event) => {
        // console.log("event.target.value 아이디?", event.target.value);
        setEmail(event.target.value);
    }

    // input이 onchange할때마다 handlePasswordChange 함수 발생 
    const handlePasswordChange = (event) => {
        // console.log("event.target.value 비번?", event.target.value);
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //페이지가 리프레쉬될 때 state가 초기화되는 것을 막아준다.
        
        var Customer = clayful.Customer;

        var payload = {
            email ,
            password 
        };
        console.log("payload",payload);

        // 클레이풀에 요청을 보내는 부분 
        Customer.createMe(payload, function(err, result) {

            if (err) {
                // Error case
                console.log(err.code);
                return;
            }
            navigate("/login");

            // var data = result.data;
            // console.log(data);
        });
    }

    return (
        <div className='auth-wrapper'>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleEmailChange}
                placeholder='Apple ID' 
                type="email" 
                name="email" 
                value={email}
                />
                <input 
                onChange={handlePasswordChange}
                placeholder='암호' 
                type="password" 
                name="password" 
                value={password}
                />

                <button type='submit' className='btn-register'>회원가입</button>
            <Link to="login" style={{ color: "gray", textDecoration: "none" }}>
               {""}
               이미 Apple ID가 있다면? 지금 로그인.
            </Link>
            </form>
        </div>
    )
}

export default RegisterPage
