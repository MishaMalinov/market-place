import React, { useState } from "react";
function UserProfile(){
    // let userName = '';
    // let pass = '';
    // let firstName = '';
    // let secondName = '';
    const [profileName,setProfileName] = useState('');
    const [profilePass,setProfilePass] = useState('');
    // const [firstName,setUsername] = useState('');
    // const [username,setUsername] = useState('');

    //gets methods
    function getUserName(){
        return profileName;
    }
    // let getfirstName=()=>{
    //     return firstName;
    // } 
    // let getSecondName=()=>{
    //     return secondName;
    // }
    function getPass(){
        return profilePass;
    }
    //set methods
    let setUserName=(text)=>{
        setProfileName(text)
    }
    // let setfirstName=(text)=>{
    //     return firstName = text;
    // } 
    // let setSecondName=(text)=>{
    //     return secondName = text;
    // }
    let setPass=(text)=>{
        setProfilePass(text);
    }
    return{
        getPass:getPass,
        getUserName:getUserName,
        setPass:setPass,
        setUserName:setUserName,
    }


}

export default UserProfile;