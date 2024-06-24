import { Form } from "react-router-dom";
import { useState } from "react";
import emailjs from '@emailjs/browser'

export default function Contact() {

    const [isSubmit, setSubmit] = useState(false);
    const [email, setEmail] = useState('');

    const sendEmail = (e) => {
        e.persist()
        e.preventDefault()
        setSubmit(true)

        emailjs.sendForm("service_hx565t9", "template_rypbbvb", e.target, "kESmNaIx5pFd5UJPY")
        .then((res) => {
            setEmail('Email Sent Successfully')
            setSubmit(false)
            setTimeout(() => {
                setEmail('')
            },5000);
        },
        (error) => {
            setEmail('Email Failed to Send')
            setSubmit(false)
            setTimeout(() => {
                setEmail('')
            },5000);
        
        })
        e.target.reset();
    }

    return (
        <div className="flex flex-col mx-10">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <div className="flex flex-col px-5 pt-20 pb-5">
                        <h1 className="text-7xl font-extrabold">Contact</h1>
                        <h3 className=" pt-3 text-3xl font-bold text-gray-500">I'm currently looking for Freelance Projects. Email</h3>
                        <h3 className=" pt-1 text-3xl font-bold text-gray-500">me for inquiries.</h3>
                    </div>
                    <div className="flex flex-row p-3">
                        <Form method="post" onSubmit={sendEmail}>
                            <div className="flex flex-col p-3">
                                <div className="flex flex-row pb-2">
                                    <input type = "text" name="name" placeholder="NAME" className="px-20 py-5 bg-[#222] text-white rounded-lg text-left" />
                                    <input type = "email" name = "email" placeholder="EMAIL" className="ml-2 px-20 py-5 bg-[#222] text-white rounded-lg text-left" />
                                </div>
                                <textarea rows={5} cols={40} name = "message" placeholder="MESSAGE" className="px-10 py-5 bg-[#222] text-white rounded-lg"></textarea>
                                <button type="submit" value = "Send" disabled = {email} className="px-10 py-5 font-extrabold text-center bg-white text-black mt-2 rounded-lg">SEND EMAIL</button>
                                {email && <p>{email}</p>}
                            </div>
                        </Form>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1592492159418-39f319320569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="mt-24  h-[500px] w-[600px] rounded-xl grayscale hover:grayscale-0 duration-300" id = "contact-img"/>
            </div>
            <div className="pb-40"></div>
        </div>
    )
}