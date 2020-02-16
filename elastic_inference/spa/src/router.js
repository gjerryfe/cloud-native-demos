const routers = [
    {
        path: '/',
        meta: {
            title: 'Cloud Native Elastic Inference Demo'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    }
];
export default routers;