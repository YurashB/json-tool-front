import Main from "@/components/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import JsonSchemaEditorPage from "@/components/pages/JsonSchemaEditorPage.vue";
import SchemaToMarkdownPage from "@/components/pages/SchemaToMarkdownPage.vue";
import SignUp from "@/components/pages/SignUp.vue";
import LogIn from "@/components/pages/LogIn.vue";
import SnapshotsListPage from "@/components/pages/SnapshotsListPage.vue";

const routes = [
    {
        path: '/',
        name: "main",
        component: Main,
        props: true
    },
    {
        path: '/schema',
        component: JsonSchemaEditorPage
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/login',
        component: LogIn,
    },
    {
        path: '/schema/converter/markdown',
        component: SchemaToMarkdownPage
    },
    {
        path: '/snapshots',
        component: SnapshotsListPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;