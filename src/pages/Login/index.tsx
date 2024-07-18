import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Home/components/Header';
import { Triangle } from 'react-loader-spinner';
import { enqueueSnackbar } from 'notistack';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { isLogging, isLoading, setIsLoading } = useAppContext();
    const route = useNavigate();

    React.useEffect(() => {
        if (isLogging) {
            route('/');
        }
    }, [isLogging, route]);

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            enqueueSnackbar("Login bem-sucedido!");
        } catch (error) {
            enqueueSnackbar("Erro de login: " + error);
        }
        setIsLoading(false);
    };

    return (
        <div
            style={{
                background: 'url(https://images.unsplash.com/photo-1692158962119-8103c7d78c86?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                backgroundSize: 'cover',
                backdropFilter: 'blur(10px)', // Adiciona o filtro de desfoque
                WebkitBackdropFilter: 'blur(10px)', // Para compatibilidade com navegadores WebKit
            }}
            className='flex flex-col lg:justify-center  items-center bg-gray-200 min-h-screen'
        >
            <form onSubmit={handleLogin} className="mx-auto md:w-1/4 px-6 py-6 bg-white rounded-lg shadow-md backdrop-blur-lg mt-12">

            <Header />


                <h2 className="text-2xl font-bold mb-6">Entrar</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 py-2 rounded-md hover:bg-blue-700 font-bold text-lg text-center text-white flex justify-center"
                >
                    {
                        isLoading ? <Triangle
                            visible={true}
                            height="28"
                            width="28"
                            color="#ffffff"
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /> : 'Entrar'
                    }
                </button>
                <button onClick={() => route('/register')} className='text-blue-500 mt-4 text-center justify-center'>Registrar</button>
            </form>
        </div>
    );
};

export default Login;
