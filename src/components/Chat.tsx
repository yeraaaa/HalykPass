'use client'

import React from 'react';  
import { useChat, Message } from "ai/react"
import Link from 'next/link';

export default function ChatComponent() {
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();

    return (
        <div>
            {messages.map((message: Message) => {
                return (
                    <div className="mx-20 grid grid-cols-1" key={message.id}>
                        {message.role === 'assistant'
                            ? <h3 className="text-lg font-semibold mt-2 text-[#faaf2f]">ChefChat</h3>
                            : <h3 className="text-lg font-semibold mt-2 justify-self-end text-[#006D58]">You</h3>
                        }
                        {message.content.split("/n").map((currentTextBlocks: string, index: number) => {
                            if (currentTextBlocks === "") {
                                return (
                                    <p key={message.id + index}>&nbsp;</p>
                                );
                            } else {
                                return (
                                    <div className="w-full grid grid-cols-1" key={message.id + index}>
                                        {message.role === 'user'
                                            ? <p className="text-md justify-self-end flex items-end justify-end mt-2 text-white bg-[#006D58] p-2 rounded-lg">{currentTextBlocks}</p>
                                            : <p className="text-md bg-[#faaf2f] justify-self-start mt-2 text-white p-2 rounded-lg">{currentTextBlocks}</p>
                                        }
                                    </div>
                                );
                            }
                        })}
                    </div>
                );
            })}
            <div className="h-full p-12">
                <form className="mx-24 mb-4 fixed inset-x-0 bottom-0" onSubmit={handleSubmit}>
                    <input
                        className="rounded-md mt-2 w-full bg-[#006D58] text-white p-2"
                        placeholder={'Ask something...'}
                        value={input}
                        onChange={handleInputChange}
                    />
                    <button className="rounded-md border-2 bg-[#006D58] text-white hover:bg-[#faaf2f] hover:text-black transition-all p-2 mt-2 font-bold">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
