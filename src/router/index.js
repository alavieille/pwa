import Vue      from 'vue'
import Router   from 'vue-router'
import Notes    from '../components/Note/Notes'
import AddNote  from '../components/Note/AddNote'
import Camera   from '../components/Camera/Camera'
import Call     from '../components/Call/Call'
import Location from '../components/Location/Location'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'notes',
      component: Notes
    },
    {
      path: '/add-note',
      name: 'add-note',
      component: AddNote
    },
    {
      path: '/camera',
      name: 'camera',
      component: Camera
    },
    {
      path: '/call',
      name: 'call',
      component: Call
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    }
  ]
})
