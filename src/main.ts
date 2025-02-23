import './assets/main.css'
import ApplicationFile from './App.vue'
import plugins         from './plugins'
import { createApp }   from 'vue'

const Application = createApp( ApplicationFile ) 

plugins.map( async fun => await fun( Application ) )

Application.mount( '#application' ) 
