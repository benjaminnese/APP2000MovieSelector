import React from 'react';

class SearchBar extends React.Component{
    state = {term: 'Search'};

    onInputChange = (event) =>{
        this.setState({term: event.target.value});
    };
    onFormSubmit =(event) =>{
        event.preventDefault(); //Forhindrer at 

        this.props.onFormSubmit(this.state.term); //Fra app.js filen SearchBar
    };

    render(){
        return (
            <div className="bg-primary">
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input 
                          type="text" 
                          value={this.state.term}
                          onChange={this.onInputChange}
                          />
                    </div>
                </form>
            </div>
        );
    }
};
export default SearchBar;