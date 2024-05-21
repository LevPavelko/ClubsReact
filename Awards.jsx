class Awards extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const awardsStyle = {
            textAlign: "center",
            margin: 10,
            background: `${this.props.color}`,
            fontSize: 24
        };
        return (
            <p style={awardsStyle}><strong>Awards:</strong>{this.props.awards}</p>
        );
    }
}