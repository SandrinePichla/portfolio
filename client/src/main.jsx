// ===============================================
// MAIN.JSX - Point d'entrée de l'application react
// ===============================================

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {HashRouter} from 'react-router-dom'; // HashRouter : compatibilité déploiement statique & SPA
import './styles/main.scss'  
import App from './App.jsx'


// Crée une racine React dans l'ID 'root' et y affiche le contenu + contrôles
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </StrictMode>,
)