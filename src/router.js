import { createRouter, createWebHistory } from "vue-router";

import Clients from "./components/pages/Clients.vue";
import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Gallery from "./components/pages/Gallery.vue";
import Products from "./components/pages/Products.vue";
import Partners from "./components/pages/Partners.vue";
import Contactus from "./components/pages/Contactus.vue";
import Login from "./components/pages/Login.vue";

import Poultry from "./components/sub-page/Poultry.vue";
import Dairy from "./components/sub-page/Dairy.vue";
import Aqua from "./components/sub-page/Aqua.vue";

import Antibiotic from "./components/sub-pages/Antibiotic.vue";
import Betaine from "./components/sub-pages/Betaine.vue";
import Butyricacid from "./components/sub-pages/Butyricacid.vue";
import Disinfectant from "./components/sub-pages/Disinfectant.vue";
import Driedmolasses from "./components/sub-pages/Driedmolasses.vue";
import Emulsifier from "./components/sub-pages/Emulsifier.vue";
import Essentialoil from "./components/sub-pages/Essentialoil.vue";
import LivertonicVue from "./components/sub-pages/Livertonic.vue";
import Nutritional from "./components/sub-pages/Nutritional.vue";
import Prebiotics from "./components/sub-pages/Prebiotics.vue";
import Toxinbinder from "./components/sub-pages/Toxinbinder.vue";
import Yeastbased from "./components/sub-pages/Yeastbased.vue";

const routes = [
    {
        path: '/',
        component: Clients,
        redirect: 'home',
        children: [
            { path: 'home', component: Home },
            { path: 'about', component: About },
            { path: 'gallery', component: Gallery },
            { path: 'products', component: Products },
            { path: 'partners', component: Partners },
            { path: 'Contactus', component: Contactus },
            { path: 'login', component: Login },

            { path: 'poultry', component: Poultry },
            { path: 'dairy', component: Dairy },
            { path: 'aqua', component: Aqua },

            { path: 'antibiotic', component: Antibiotic },
            { path: 'betaine', component: Betaine},
            { path: 'butyricacid', component: Butyricacid},
            { path: 'disinfectant', component: Disinfectant},
            { path: 'driedmolasses', component: Driedmolasses},
            { path: 'emulsifier', component: Emulsifier },
            
            { path: 'essentialoil', component: Essentialoil},
            { path: 'livertonic', component: LivertonicVue },
            { path: 'nutritional', component: Nutritional},
            { path: 'prebiotics', component: Prebiotics},
            { path: 'toxinbinder', component: Toxinbinder},
            { path: 'yeastbased', component: Yeastbased},               
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;