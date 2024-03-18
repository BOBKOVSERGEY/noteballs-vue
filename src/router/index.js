import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Notes',
        component: () => import('@/views/Notes/NotesView.vue')
    },
    {
        path: '/edit-note/:id',
        name: 'EditNote',
        component: () => import('@/views/Notes/EditNoteView.vue')
    },
    {
        path: '/stats',
        name: 'Stats',
        component: () => import('@/views/Stats/StatsView.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;