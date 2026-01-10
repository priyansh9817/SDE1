import Userlists from "./Userlist";


function Profile (){
    const users = [
        {id:1,name:"Priyanshu",role : "Admin"},
        {id:2,name:"Sukvinder", role : "Student"}
    ]

return < Userlists users = {users}/>
}


export default Profile;