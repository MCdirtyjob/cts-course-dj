import React, {Component} from 'react';
import Input from './input';
class Card extends Component{

    constructor(){
        super()
        this.state={
            color: '',
            pluralNoun: ''
        }
        
        this.handelInputChange=this.handelInputChange.bind(this);
    }

    handelInputChange(event){
        this.setState({ [event.target.name]: event.target.value})
        
}

    render(){


        return(
            <div className="card">
                <h1>{this.state.color}</h1>
                {Input('Color', this.state.color, this.handelInputChange, 'color' )}
                {Input('Plural Noun', this.state.pluralNoun, this.handelInputChange, 'pluralNoun')}                
            </div>
        )
    }
}
export default Card;