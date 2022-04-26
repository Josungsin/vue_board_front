import {createRouter, createWebHistory} from 'vue-router'
import SignUp from "@/views/SignUp";
import Home from "@/views/Home";
import BoardList from "@/views/BoardList";
import VideoFrom from "@/views/VideoForm";
import VideoList from "@/views/VideoList";
import WriteBoard from "@/views/WriteBoard";
import DetailBoard from "@/views/DetailBoard";

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/board',
        name: 'BoardList',
        component: BoardList
    },
    {
        path: '/video',
        name: 'VideoFrom',
        component: VideoFrom
    },
    {
        path: '/video-list',
        name: 'VideoList',
        component: VideoList
    },
    {
        path: '/write-board',
        name:'WriteBoard',
        component: WriteBoard
    },
    {
        path: '/detail-board/:boardIdx',
        name: 'DetailBoard',
        component: DetailBoard
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
