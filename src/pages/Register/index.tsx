// src/components/Register.tsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const route = useNavigate()
    
    const handleRegister = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Registro bem-sucedido!");
        } catch (error) {
            alert("Erro de registro: " + error);
        }
    };

    return (
        <form onSubmit={handleRegister} className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
            <div className="flex justify-center items-center mb-8">
                <p className="text-3xl font-light text-center">Agenda<span className="font-semibold text-slate-600">ACS</span></p>

            </div>
            <h2 className="text-2xl font-bold mb-6">Registrar</h2>
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
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                Registrar
            </button>

            <button onClick={()=> route('/login')} className='text-blue-800 mt-4 text-center justify-center'>Fazer login</button>

        </form>
    );
};

export default Register;
