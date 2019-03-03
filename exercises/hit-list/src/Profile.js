import React from 'react';

const Profile = (props) => {
    const  div={
        width: "200px",
        display:"inline-block",
        margin:"30px"
    }
    const img={
        width: "200px",
        height: "300px",
        margin:0
    }
    const h={
        color:"white",
        backgroundColor:"lightBlue",
        width:"200px",
        height: "40px",
        textAlign: "center",
        margin:0,
        fontSize:20

    }
    return (
        <div style={div}>
            <img style={img} src={props.image} />
            <h3 style={h}>{props.name}</h3>
        </div>
    );
};

export default Profile;