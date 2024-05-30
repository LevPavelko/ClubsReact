class App extends React.Component {
    constructor(props) {
       
        super(props);
        this.state = {
            title: this.props.title,
            city: this.props.city,
            founded: this.props.founded,
            president: this.props.president,
            description: this.props.description,
            flag: this.props.flag,
            poster: this.props.poster,
            awards: this.props.awards,
            color: this.props.color,
            squad: this.props.squad,
            squadImg: this.props.squadImg
        };
        
    }

    render() {
       
        return (
            
            <div>
                <Club 
                    title={this.state.title} 
                    city={this.state.city} 
                    founded={this.state.founded}
                    president={this.state.president}
                    description={this.state.description} 
                    poster={this.state.poster}
                    flag= {this.state.flag}
                  
                />
                <Awards awards={this.state.awards} 
                        color={this.state.color}/>
                <Squad 
                
                    squad={this.state.squad}
                    squadImg={this.state.squadImg}
                     
                />
            </div>
        );
    }
}
