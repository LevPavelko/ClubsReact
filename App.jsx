const { string } = require("prop-types");

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
                flag: string,
                poster: string,
                awards: string,
                color: string,
                squad: string,
                squadImg: string

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
                    poster={this.state.club.poster}
                    flag= {this.state.club.flag}
                  
                />
                <Awards awards={this.state.club.awards}/>
                <Squad 
                
                    squad={this.state.club.squad}
                    squadImg={this.state.club.squadImg}
                     
                />
            </div>
        );
    }
}
