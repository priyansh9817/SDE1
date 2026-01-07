
import UserCard from "./usercard"

function Profile(){
    return {
        name : "Priyanshu ",
        Email: "Priyanshu@gmail.com",
    }
    
};

<UserCard user = {Profile}/>

export default Profile;