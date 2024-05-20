class App extends React.Component {
    constructor(props) {
       
        super(props);
        this.state = {
            club: {
                title: string,
                city: string,
                founded: string,
                president: string,
                description: string,
                poster: string

            }
        };
        
    }

    render() {
       
        return (
            
            <div>
                <Club 
                    title={this.state.club.title} 
                    city={this.state.club.city} 
                    founded={this.state.club.founded}
                    president={this.state.club.president}
                    description={this.state.club.description} 
                  
                />
            </div>
        );
    }
}
