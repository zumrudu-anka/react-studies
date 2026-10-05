import React, {useState, useEffect} from 'react';

export default function Profile({match}) {
    const [member, setMember] = useState();
    const [isFetched, setIsFetched] = useState(false);

    useEffect(()=>{
        if(member !== undefined){
            setIsFetched(true);
        }
    }, [member]);

    const getMember = (memberId) =>{
        fetch(`https://jsonplaceholder.cypress.io/users/${memberId}`).then(response=>{
            response.json().then(jsonData => {
                setMember(jsonData);
            })
        })
    };

    useEffect(()=>{
        getMember(match.params.id);
    }, [match.params.id]);

    return (
        <div className = "profilePage">
            {
                isFetched === true ? (
                    <>
                        <h1>{member.name}</h1>
                        <h2>Email : {member.email}</h2>
                        <h2>Phone : {member.phone}</h2>
                        <h2>Username : {member.username}</h2>
                        <h2>Website : {member.website}</h2>
                        <h2>Company : {member.company.name}</h2>
                        <h4>Address : {member.address.street} {member.address.suite} {member.address.city}</h4>
                    </>
                ) : <h1>Member Can't Fetched</h1>
            }
        </div>
    )
}
