import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout>
            <div className="flex-1 justify-between flex flex-col  ">
                <div
                    id="messages"
                    className="flex flex-col space-y-4 p-3 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch h-[80vh] overflow-y-scroll"
                >
                    {/* chat message left  */}
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                                <div>
                                    <span className="px-4 py-2 inline-block rounded-xl rounded-bl-none bg-white text-gray-600 shadow-sm shadow-blue-100">
                                        Can be verified on any platform using
                                        docker
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                alt="My profile"
                                className="w-8 h-8 rounded-full order-1"
                            />
                        </div>
                    </div>
                    {/* chat message right  */}
                    <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end ">
                                <div>
                                    <span className="px-4 py-2 rounded-xl inline-block rounded-br-none bg-blue-600 text-white shadow">
                                        Your error message says permission
                                        denied, npm global installs must be
                                        given root privileges.
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                alt="My profile"
                                className="w-8 h-8 rounded-full order-2"
                            />
                        </div>
                    </div>
                    {/* chat message left  */}
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                                <div>
                                    <span className="px-4 py-2 inline-block rounded-xl rounded-bl-none bg-white text-gray-600 shadow-sm shadow-blue-100">
                                        Can be verified on any platform using
                                        docker
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                alt="My profile"
                                className="w-8 h-8 rounded-full order-1"
                            />
                        </div>
                    </div>
                    {/* chat message right  */}
                    <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end ">
                                <div>
                                    <span className="px-4 py-2 rounded-xl inline-block rounded-br-none bg-blue-600 text-white shadow">
                                        Your error message says permission
                                        denied, npm global installs must be
                                        given root privileges.
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                alt="My profile"
                                className="w-8 h-8 rounded-full order-2"
                            />
                        </div>
                    </div>
                    {/* chat message left  */}
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                                <div className="space-y-2">
                                    <span className="px-4 py-2 inline-block rounded-xl  bg-white text-gray-600 shadow-sm shadow-blue-100">
                                        Can be verified on any platform using
                                        docker
                                    </span>
                                    <span className="px-4 py-2 inline-block rounded-xl rounded-bl-none bg-white text-gray-600 shadow-sm shadow-blue-100">
                                        Can be verified on any platform using
                                        docker
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                alt="My profile"
                                className="w-8 h-8 rounded-full order-1"
                            />
                        </div>
                    </div>
                    {/* chat message right  */}
                    <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end ">
                                <div>
                                    <span className="px-4 py-2 rounded-xl inline-block rounded-br-none bg-blue-600 text-white shadow">
                                        Your error message says permission
                                        denied, npm global installs must be
                                        given root privileges.
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                alt="My profile"
                                className="w-8 h-8 rounded-full order-2"
                            />
                        </div>
                    </div>
                </div>
                <div className=" px-4 py-2 bg-white">
                    <div className="relative flex">
                        <span className="absolute inset-y-0 flex items-center">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-gray-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                    ></path>
                                </svg>
                            </button>
                        </span>
                        <input
                            type="text"
                            placeholder="Write your message!"
                            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-white rounded-md py-3 outline-none  border-0 focus:border-0 focus:ring-0"
                        />
                        <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-gray-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-gray-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-gray-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full p-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none "
                            >
                                {/* <span className="font-bold">Send</span> */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-6 w-6  transform rotate-[45deg]"
                                >
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <style>
.scrollbar-w-2::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: #edf2f7;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}
</style>

<script>
	const el = document.getElementById('messages')
	el.scrollTop = el.scrollHeight
</script> */}
        </AuthenticatedLayout>
    );
}
