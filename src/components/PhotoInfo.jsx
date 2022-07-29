import React from "react";
const PhotoInfo= (props) => {
    console.log(props);
    const { image, description, price , favWeapon, DOB  } = props;
    const handleOnclick = () => {
        alert("compleate the code lazy")
    };
    return(
        <div style={{ width: "200px", display: "flex", flexWrap: "wrap", flexDirection: "column", margin: "50px",color: "white" }}>
            <img alt="Agent name" width="85px" src={image}/>
            <span style={{ marginTop: "50px" }}>{description}</span>
            <span style={{ marginTop: "20px" }}>{price}</span>
            <span style={{ marginTop: "20px" }}>{favWeapon}</span>
            <span style={{ marginTop: "20px" }}>{DOB}</span>
            
            <button style={{ marginTop: "50px" }} onClick={handleOnclick}>{image}</button>
        </div>
    );
};

export default PhotoInfo;