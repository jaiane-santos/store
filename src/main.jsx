import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {register} from 'swiper/element/bundle'
register();

import 'swiper/css/bundle';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

createRoot(document.getElementById('root')).render(
 
    <App />
 
)
