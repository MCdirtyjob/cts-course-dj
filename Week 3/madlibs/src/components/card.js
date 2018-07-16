import React, {Component} from 'react';
import Input from './input';
class Card extends Component{

    constructor(){
        super()
        this.state={
            color: '',
            pluralNoun: '',
            adjectiveOne: '',
            celebOne: '',
            adjectiveTwo: '',
            nounOne: '',
            numberOne: '',
            numberTwo: '',
            nounTwo: '',
            adjectiveThree: '',
            celebTwo: '',
            celebThree:'',
            adjectiveFour:'',
            nounThree:'',
            celebFour: '',
            adjectiveFive:'' 

        }
        
        this.handelInputChange=this.handelInputChange.bind(this);
    }

    handelInputChange(event){
        this.setState({ [event.target.name]: event.target.value})
        
}

    render(){

        const inputData=[
            {title: 'Color', state: this.state.color, name: 'color'},
            {title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},
            {title: 'Adjective', state: this.state.adjectiveOne, name: 'adjectiveOne'},
            {title: 'Celebrity', state: this.state.celebOne, name: 'celebOne'},
            

            {title: 'Adjective', state: this.state.abjectiveTwo, name: 'adjectiveTwo'},
            {title: 'Noun', state: this.state.nounOne, name: 'nounOne'},
            {title: 'Number', state: this.state.numberOne, name: 'numberOne'},
            {title: 'Number', state: this.state.numberTwo, name: 'numberTwo'},



            {title: 'Noun', state: this.state.nounTwo, name: 'nounTwo'},
            {title: 'Adjective', state: this.state.abjectiveThree, name: 'adjectiveThree'},
            {title: 'Celebrity', state: this.state.celebTwo, name: 'celebTwo'},
            {title: 'Celebrity', state: this.state.celebThree, name: 'celebThree'},

            {title: 'Adjective', state: this.state.adjectiveFour, name: 'adjectiveFour'},
            {title: 'Noun', state: this.state.nounThree, name: 'nounThree'},
            {title: 'Celebrity', state: this.state.celebFour, name: 'celebFour'},
            {title: 'Adjective', state: this.state.adjectiveFive, name: 'adjectiveFive'},
        ]

        return(
            <div className="card">
                {
                    inputData.map(data => Input((data), this.handelInputChange))
                }
        
            
                    
            </div>
        )
    }
}
export default Card;
//     {Input('Color', this.state.color, this.handelInputChange, 'color' )}
            //     {Input('Plural Noun', this.state.pluralNoun, this.handelInputChange, 'pluralNoun')}
            //     {Input('Adjective', this.state.abjectiveOne, this.handelInputChange, 'adjectiveOne' )}
            //     {Input('Celebrity', this.state.celebOne, this.handelInputChange, 'celebOne')}     
            // data.title, data.state, this.handelInputChange, data.name  