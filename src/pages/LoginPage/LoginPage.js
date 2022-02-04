import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import clayful from 'clayful/client-js'

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        var Customer = clayful.Customer;

        var payload = {
            email,
            password
        };

        Customer.authenticate(payload, function(err, result) {

            if (err) {
                // Error case
                console.log(err.code);
                return; //return이 있어야 아래로 내려가지 않고 멈춘다.
            }

            var data = result.data;
            localStorage.setItem("customerUid", data.customer);
            localStorage.setItem("accessToken", data.token);

            // console.log(data);
            
            navigate("/");
        });
    }

    return (
        <div className='auth-wrapper'>
        <h1>로그인.</h1>
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
            <p>
                Apple ID는 아이튠즈, 앱스토어, 아이클라우드에 로그인할 때 필요하니 꼭 만들어주세요요~!
            </p>

            <button type='submit' className='btn-register'>로그인</button>
            <Link to="register" style={{ color: "gray", textDecoration: "none" }}>
                {""}
                Apple ID가 없으신가요? 지금 생성.
           </Link>
        </form>
    </div>
    )
}

export default LoginPage
