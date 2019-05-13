import React , { Component } from 'react'
import { Redirect,Switch as SwitchRouter, Route } from 'react-router-dom'

class RouterView extends Component {
    render(){
        console.log(this.props)
        let redirectArr = this.props.data.filter(item => {
            return item.redirect
        })
        let redirectDom = redirectArr.map((item,index) => {
            return <Redirect from={item.path} to={item.redirect} key={index}></Redirect>
        })
        let Dom = this.props.data.filter(item => {
            return !item.redirect
        })
        console.log(redirectDom)
        return (
            <SwitchRouter>
                {
                    Dom.map((item,index) => {
                        return <Route
                            key={index}
                            path={item.path}
                            render={(props) => {
                                console.log(props)
                                return <item.component history={props.history} children={item.children}></item.component>
                            }}></Route>
                    })
                    // .concat(redirectDom)
                }
                {
                    this.props.children
                }
            </SwitchRouter>
        )
    }
}

export default RouterView