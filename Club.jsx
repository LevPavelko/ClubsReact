class Club extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            // console.log("qq")
            
            <div >
                    <p><strong>Title:</strong> {this.props.title}</p>
                    <p><strong>City:</strong> {this.props.city}</p>
                    <p><strong>Founded:</strong> {this.props.founded}</p>
                    <p><strong>President:</strong> {this.props.president}</p>
                    <p><strong>Description:</strong> {this.props.description}</p>
            </div>
        );
        
    }
}