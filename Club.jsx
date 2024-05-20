class Club extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const club = {
            display: "flex",
            justifyContent: "center", 
            alignItems: "center", 
            flexDirection: "column",
           
            backgroundImage: `url(${this.props.flag})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
           
           
        };
        const content = {
           
            textAlign: "center",
            margin: 10,
            background: 'rgba(255, 255, 255, 0.8)',
          
            
        };
        
        return(
            // console.log("qq")
            
            <div style={club}>
                
                <img src={this.props.poster}></img>
                <div style={content}>
                    <p><strong>Title:</strong> {this.props.title}</p>
                    <p><strong>City:</strong> {this.props.city}</p>
                    <p><strong>Founded:</strong> {this.props.founded}</p>
                    <p><strong>President:</strong> {this.props.president}</p>
                    <p><strong>Description:</strong> {this.props.description}</p>
                </div>
                   
                    
            </div>
        );
        
    }
}