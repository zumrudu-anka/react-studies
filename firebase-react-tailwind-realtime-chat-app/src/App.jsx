import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { collection, doc, getFirestore, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyByXu5OCIyGlXSz5Fvie85AQnRRa2_nEOQ",
    authDomain: "real-time-chat-app-ed632.firebaseapp.com",
    projectId: "real-time-chat-app-ed632",
    storageBucket: "real-time-chat-app-ed632.firebasestorage.app",
    messagingSenderId: "1090447425492",
    appId: "1:1090447425492:web:0b414f588ba56b1fb66041",
    measurementId: "G-0Z1CPCG2K4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

function App() {

    const [user] = useAuthState(auth);

    return (
        <div className="max-w-6xl mx-auto flex flex-col h-screen">

            <header className="flex justify-between border-b p-2 mb-4">
                <h1 className="text-2xl">Sohbet Uygulaması</h1>
                {user && <SignOut />}
            </header>

            {
                user ?
                    <>
                        <MessageList />
                        <MessageForm />
                    </>
                    : <SignIn />
            }

        </div>
    )
};

const SignIn = () => {

    const handleClick = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    return (
        <div>
            <button
                className="bg-blue-500 p-2 text-white rounded-lg cursor-pointer"
                onClick={handleClick}
            >
                Google ile giriş yap
            </button>
        </div>
    )
}

const SignOut = () => {
    return (
        <button
            className="bg-red-500 p-2 text-white rounded-lg cursor-pointer"
            onClick={() => signOut(auth)}
        >
            Çıkış Yap
        </button>
    )
};

const MessageItem = ({ data }) => {
    
    const { text, userPhoto, userUID } = data;
    const reverseClass = auth.currentUser.uid === userUID ? "flex-row-reverse" : "";

    return (
        <div className={`flex ${reverseClass} items-center gap-1 w-full`}>
            <img src={userPhoto} alt="user-photo" className="w-10 h-10 rounded-full" />
            <div className="bg-gray-200 p-2 rounded-full">
                {text}
            </div>
        </div>
    )
}

const MessageList = () => {

    const messagesRef = collection(db, "messages");

    const [messages] = useCollection(query(messagesRef, orderBy("createdAt")));

    const listEndRef = useRef();

    useEffect(() => {
        listEndRef.current.scrollIntoView({ behavior : "smooth" });
    }, [messages?.docs]);

    return (
        <div className="overflow-y-auto h-full space-y-2 px-2">
            {
                messages?.docs.map(doc => (
                    <MessageItem key={doc.id} data = {doc.data()}/>
                ))
            }
            <div ref={listEndRef}></div>
        </div>
    )

};

const MessageForm = () => {

    const messagesRef = collection(db, "messages");

    const [inputText, setInputText] = useState("");

    const handleSubmit = e => {
        console.log("asd")
        e.preventDefault();

        setDoc(
            doc(messagesRef),
            {
                text: inputText,
                createdAt: serverTimestamp(),
                userUID: auth.currentUser.uid,
                userPhoto: auth.currentUser.photoURL
            }
        );

        setInputText("");

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex gap-2 p-4">
                <input
                    type="text"
                    className="border border-gray-500 rounded-lg p-2 w-full"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 p-2 text-white rounded-lg cursor-pointer">
                    Gönder
                </button>
            </form>
        </div>
    )
}

export default App;
