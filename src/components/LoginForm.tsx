import axios from 'axios';
import clsx from 'clsx'
import { Button, Label, Spinner, TextInput } from 'flowbite-react'
import Image from 'next/image'
import React, { FormEvent, HTMLAttributes, useState } from 'react'
import toast from 'react-hot-toast';
import { FaEnvelope, FaEye } from "react-icons/fa";
import api from "@/utils/api";
import { SET_TOKEN, SET_USER, UPDATE_AUTH_STATE } from '@/utils/constants';
import { useAppDispatch } from '../context/appContext';
import { useRouter } from 'next/navigation';


function LoginForm({ className }: HTMLAttributes<HTMLDivElement>) {
    const [form, setform] = useState({
        email: '',
        password: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const [messages, setMessages] = useState(null);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const submit = async (event: FormEvent) => {
        event.preventDefault()
        try {
            setIsLoading(true)
            const response = await api.post(`api/login`, form);
            console.log(response);
            if (response.status === 201) {
                const data = response.data;
                if (data.responseCode == '003') {
                    toast.error(data.responseDesc);
                }
            }
            if (response?.status == 201) {
                const data = response.data;
                console.log(data);
                
                if (data?.responseCode == "002") {
                    api.interceptors.request.use(function (config) {
                        config.headers["Authorization"] = "Bearer " + data.accessToken;
                        return config;
                    });
                    toast.success(data.responseDesc)
                    dispatch({ type: UPDATE_AUTH_STATE, payload: true })
                    dispatch({ type: SET_TOKEN, payload: data.accessToken })
                    dispatch({ type: SET_USER, payload: data.data })
                    router.push('/dashboard')
                } else if (data.responseCode === "003") {
                    toast.error(data.responseDesc);
                } else if (data.statusCode === 400) {
                    toast.error('Login Error', data.error)
                }
            }
        } catch (error: any) {
            const response = error?.response;
            if (response?.status === 400) {
                const data = response?.data
                setMessages(data?.messages)
                console.log(response);
                toast.error(data.error)
            }
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={clsx(className, "flex flex-col justify-center gap-5 px-10")}>
            <Image src={"/images/logo.svg"}
                width={100} height={100}
                className='object-cover mx-auto'
                alt='logo' loading='lazy'
            />
            <div className="border-b-2 pb-2">
                <p className="text-2xl font-medium my-2">Get Started Now</p>
                <p className="font-normal text-base my-2">Enter your credentials to access your account</p>
            </div>

            <form onSubmit={submit} className="flex flex-col gap-3.5">
                <div className='w-full'>
                    <Label htmlFor="email" value="Email" className="font-medium text-sm" />
                    <TextInput id="email" type="email"
                        placeholder="Your email" rightIcon={FaEnvelope} //required={true}
                        onChange={(e) => setform(prev => ({ ...prev, email: e.target.value }))}
                    />
                </div>
                <div className='w-full'>
                    <Label htmlFor="password" value="Password" />
                    <TextInput id="password" type="password"
                        placeholder="Your password" rightIcon={FaEye}
                        autoCorrect='current-pasword'
                        onChange={(e) => setform(prev => ({ ...prev, password: e.target.value }))}
                    //required={true}
                    />
                </div>
                <button type="submit" className="text-white bg-primary focus:ring-4 focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none">
                    {isLoading ? <Spinner size={"sm"} /> : <>Submit</>}
                </button>
            </form>
        </div>
    )
}

export default LoginForm