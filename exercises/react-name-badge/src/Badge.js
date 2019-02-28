import React from "react"

const Badge = (props) => {
    const {firstName,lastName,email,birth,phone,food,about} = props.badge;
    return(
        <React.Fragment>
            <header>
                <h1>Badge:</h1>
            </header>
            <h1>Name: {firstName} {lastName}</h1>
            <h4>place of birth: {birth}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
            <h4>Favorite food:{food}</h4>
            <h5>{about}</h5>

        </React.Fragment>
    )
}

export default Badge