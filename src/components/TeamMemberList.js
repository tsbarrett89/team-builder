import React from 'react';


const TeamMemberList = props => {
    return (
        <div>
            <div>
                {props.memberList.map((member, index) => {
                    return(
                        <div key={index}>
                            <h3>{member.name}</h3>
                            <p>{member.email}</p>
                            <p>{member.role}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TeamMemberList