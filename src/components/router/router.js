import Main from "@/components/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import SignIn from "@/components/pages/SignIn.vue";
import JsonSchemaEditorPage from "@/components/pages/JsonSchemaEditorPage.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/schema',
        component: JsonSchemaEditorPage
    },
    {
        path: '/sign-in',
        component: SignIn
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;