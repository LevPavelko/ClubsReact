class Squad extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const squadStyle = {
           
            textAlign: "center", 
            marginTop: "10px" ,
            fontSize: 24
           
        };
        const img = {
            display: "block", 
            margin: "0 auto",
            width: 550, 
            height: 350
        };
        const center ={
            display: "flex",
            justifyContent: "center", 
            alignItems: "center",
            flexDirection: "column"
            
        };
        return (
            <div style={center}>
                <img src={this.props.squadImg} style={img} ></img>
                <div style={squadStyle}><strong>Squad:</strong>{this.props.squad}</div>
            </div>
           
        );
    }
}