import {createApp} from 'vue'
import App from './App.vue'
import "@/assets/tailwind.css"
import router from "@/components/router/router";
import components from '@/components/UI'
import vue3TsJsoneditor from 'vue3-ts-jsoneditor';
import  "./components/inetrceptors/axios"

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(vue3TsJsoneditor, {
            componentName: 'jsonEditor',
            options: {
                height: '400',
                mainMenuBar: false,
                navigationBar: false,
            }
        }
    )
    .mount('#app')
