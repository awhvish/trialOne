import React, { useEffect, useState } from "react";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

function Play() {
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        async function handlePlay() {
            const token = localStorage.getItem('token');
            if (!token) {
                setFlag(false);
                return;
            }
            try {
                const response = await fetch('/api/v1/play', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    }
                });
                if (response.status === 202) {
                    const data = await response.json();
                    setFlag(true);
                } else {
                    console.log("Failed to play. Server response: ", await response.json());
                    setFlag(false);
                }
            } catch (error) {
                console.log("Error fetching API: ", error);
            }
        }

        handlePlay();
    }, []); // Empty dependency array to ensure it runs only once

    return (
        <div>
            <Navbar />
            <h1>Play the game</h1>
            {flag ? <h2>Game is loading..</h2> : <h2>Please <a href="/Login">Login</a> to play</h2>}
            <Footer></Footer>
        </div>
    );
}

export default Play;
