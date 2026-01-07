function Greet(){
    return<>
    <Reminder name = "Your Device is getting connected"/>
    </>
}

function Reminder (props){
    return<h1>Hey!{props.name}</h1>
}

export default Greet;