import { createRouter, createWebHistory } from 'vue-router';
import SaveForm from '@/components/SaveForm'
// import HelloWorld from '@/components/HelloWorld'
import GetForm from '@/components/GetForm'

const routes = [
{
    path: '/saveform',
    name: 'SaveForm',
    component: SaveForm
},
{
    path: '/getform',
    name: 'GetForm',
    component: GetForm
}]
const router=createRouter({
    history: createWebHistory(),
    routes})
export default router