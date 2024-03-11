import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                const responseData = await response.json();
                window.location.href = responseData.redirectTo;
            } else {
                setError("Invalid username or password");
            }
        } catch (err) {
            setError("An error occurred while processing your request");
            console.log(err)
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "seagreen" }}>
            <div style={{ width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", background: "#fff", textAlign: "center" }}>
                <form onSubmit={handleSubmit}>
                    <h1 style={{ fontFamily: "Poppins, sans-serif" }}>Login</h1>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", justifyContent: "center" }}>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required style={{ marginRight: "0.5rem" }}/>
                        <FaUser />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", justifyContent: "center" }}>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ marginRight: "0.5rem" }}/>
                        <FaLock />
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                        <label><input type="checkbox" />Remember me</label>
                    </div>
                    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                        <button type="submit">Login</button>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <p>Don't have an account? <a href="http://localhost:3000/RegistrationPage">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
