import React , { Component } from 'react'

class Search extends Component {
    render(){
        console.log(this.props)
        return (
            <div>
                <h3>今日热映</h3>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
        )
    }
}

export default Search