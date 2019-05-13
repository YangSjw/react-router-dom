import React , { Component } from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import RouterView from '../router/RouterView'

class Movie extends Component {
    render(){
        console.log(this.props)
        return (
            <div>
                <NavLink to='/index'>首页</NavLink>
                <NavLink to='/index/search'>页面Search</NavLink>
                <NavLink to='/index/will'>页面will</NavLink>
                <h3>新片上映</h3>
                <RouterView data={this.props.children}>
                    <Redirect from="/index" to="/index/movie"></Redirect>
                </RouterView>
            </div>
        )
    }
}

export default Movie