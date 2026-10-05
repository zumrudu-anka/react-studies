import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

export default function Members() {
    const [members, setMembers] = useState();
    const [isFetched, setIsFetched] = useState(false);
    // const getMembers = async () =>{
    //     const membersData = await fetch("https://jsonplaceholder.cypress.io/users");
    //     setMembers(await membersData.json());
    //     console.log(members)
    // };

    useEffect(()=>{
        if(members !== undefined){
            setIsFetched(true);
        }
    }, [members]);

    const getMembers = () =>{
        fetch("https://jsonplaceholder.cypress.io/users").then(response=>{
            response.json().then(jsonData => {
                setMembers(jsonData);
            })
        })
    };

    useEffect(()=>{
        getMembers();
    }, []);
    
    return (
        <div className = "membersPage">
            <h2>
                Members
            </h2>
            <br/><br/>
            <hr/>
            <br/><br/>
            <table border = "1">
                <caption>Members</caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Email</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isFetched ? members.map(member => {
                            return <tr key = {member.id}>
                                <td>
                                    <Link to={`/members/${member.id}`}>
                                        {member.id}
                                    </Link>
                                </td>
                                <td>{member.name}</td>
                                <td>{member.username}</td>
                                <td>{member.phone}</td>
                                <td>{member.website}</td>
                                <td>{member.email}</td>
                                <td>{member.company.name}</td>
                            </tr>
                        }) : <tr>

                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
