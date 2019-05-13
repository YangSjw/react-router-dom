import movie from '../components/movie'
import Search from '../components/Search'
import myCenter from '../components/myCenter'
import index from '../components/index'
import b from '../components/b'
import cinema from '../components/cinema'

export default {
    routes:[
        {
            path:'/index',
            component:movie,
            children:[
                // {
                //     path:'/index',
                //     redirect:'/index/movie'
                // },
                {
                    path:'/index/search',
                    component:Search
                },
                {
                    path:'/index/movie',
                    component:index
                },
                {
                    path:'/index/will',
                    component:b
                }
            ]
        },
        // {
        //     path:'/',
        //     redirect:'/index'
        // },
        {
            path:'/cinema',
            component:cinema
        },
        {
            path:'/mycenter',
            component:myCenter
        }
    ]
}