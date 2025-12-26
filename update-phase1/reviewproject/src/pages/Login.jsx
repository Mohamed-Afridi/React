import {Link,useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return(
        <>
        
        <div>
            <h2>Login</h2>


            <input type="email" placeholder="emailaddress"/>
            <br />

            <input type="password" placeholder="password" />
            <br />

            <button onClick={() =>Navigate("/feed")}>Login</button>


                <p>
                    new user? <Link to="/register">Register</Link>
                </p>
              </div>
        
        </>
    );
}

export default Login;