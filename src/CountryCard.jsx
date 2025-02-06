const CountryCard = ({
    flag,
    name
}) => {
    //destructing sequence is not important in the obj
    return (
    <div
    style={{
        display:"flex",
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"center",
        border:"1px solid black",
        borderRadius: "10px",
        padding: "5px",
        height: "200px",
        width:"200px",
    }}>
        <img src={flag} 
        alt={`Flag of ${name}`} 
        style={{
            width:"100px",
            height:"100px",
        }}/>
        <h2>{name}</h2>
    </div>
    )
}

export default CountryCard;