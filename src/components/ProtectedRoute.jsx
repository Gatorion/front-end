import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ usuarioAutenticado, children }) => {
    const location = useLocation(); // Obtém o caminho atual da URL

    // Se o usuário estiver logado e tentar acessar '/', redireciona para '/feed'
    if (usuarioAutenticado && location.pathname === '/') {
        return <Navigate to="/feed" replace />;
    }

    // Se o usuário não estiver autenticado e tentar acessar uma rota protegida
    else if (!usuarioAutenticado && location.pathname === '/feed') {
        return <Navigate to="/" replace />;
    }
    else {
        // Renderiza o conteúdo da rota se as condições forem atendidas
        return children;
    }
};

export default ProtectedRoute;