import {Link,useNavigate} from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    return(
        <>
        <div>
            <h2>Register</h2>

            <input placeholder="Name" />
            <br />

            <input placeholder="email" />
            <br />

            <input type="password" placeholder="password" />
            <br />

            <input type="password" placeholder="confirm password" />
            <br />

            <button onClick={()=> navigate("/")}>Register</button>

            <p>Already have an account?  <Link to="/">Login</Link></p>
        </div>
        
        </>

    );
    
}
export default Register;