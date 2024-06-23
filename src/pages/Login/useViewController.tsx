import { FormEvent, useEffect, useState } from "react";
import React from "react";
import { signInWithGoogle, logout, auth } from "../../config/firebase.config";
import { User, UserCredential, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


const ControllerLogin = () => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [error, setError] = React.useState<string>('')
    const [loading, setLoading] = React.useState<boolean>(false)

    const {
        isLogging,
        signInWithEmailAndPass,
        router
    } = useAppContext()


    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        setLoading(true)
        e.preventDefault()
        e.stopPropagation()

        const data = { email, password }

        await signInWithEmailAndPass(data).then(res => {
            if (!res) router.push('/account')
            if (!!res && !!res.code) return setError(getAuthError(res.code))

        })
        setLoading(false)

    }

    return {
        signInWithGoogle,
        isLogging,
        email,
        password,
        setEmail,
        setPassword,
        signInWithEmailAndPass,
        loading,
        handleSubmit,
        error
    };
};

export default ControllerLogin;