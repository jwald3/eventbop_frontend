import React from "react";
import LoginForm from "./components/LoginForm";

const App = () => {
    const handleLogin = async (username, password) => {
        const url = "http://localhost:8000/api/entertainmentapp/login/";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("authToken", data.token);
                console.log("Login successful:", data);
            } else {
                console.log("Login failed:", response.statusText);
            }
        } catch (error) {
            // Handle network errors
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <h1>Log in</h1>
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default App;
