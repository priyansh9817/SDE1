function APPs (){
    return(
        <>
        <Greeting name = "Priyanshu : This is your Revision Props "></Greeting>
        </>

    )
}

function Greeting (Props){
    return<h1>Hello{Props.name}</h1>
}

export default APPs;