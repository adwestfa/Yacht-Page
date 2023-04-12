import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase";
// import { initializeApp } from "firebase/firestore";
// import { getDatabase, ref, set } from "firebase/database";

import { getDatabase, ref, set, onValue  } from "firebase/database";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



function Newsletter() {
    const [showTabContent, setShowTabContent] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const db = getDatabase();

    const toggleTabContent = () => {
        setShowTabContent(!showTabContent);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        set(ref(db, "/email " + name), {
            email: email,
            name: name,
        });
        setEmail("");
        setName("");
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);

    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div className="newsletter-tab">
            <div className="tab-content" style={{ display: showTabContent ? "block" : "none" }}>
                <h3>Zapisz się do Newslettera</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Wpisz swoje imie i nazwisko" value={name} onChange={handleNameChange}/>
                    <input type="email" placeholder="Wpisz swoj adres Email" value={email} onChange={handleEmailChange} />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className="tab-button" onClick={toggleTabContent}>
                <span>Newsletter</span>
            </div>
        </div>
    );
}

export default Newsletter;
