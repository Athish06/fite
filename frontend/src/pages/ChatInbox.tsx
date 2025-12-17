import React, { useState } from 'react';
import { Search, Phone, Video, MoreVertical, Send, Paperclip, Smile, ArrowLeft, Check, CheckCheck } from 'lucide-react';
import { clsx } from 'clsx';

// Mock Data
const conversations = [
    {
        id: 1,
        name: "Sarah Jenkins",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzPNsSwHo3EU709JiqrUPuPD57cc8APa_BWk6QpEQitvIXcyeSSLZHa4-V-ijMOUZmXZ3caNM-p3pc1TRvKUivs64Oak7_UQwU9haVJmWMgrowjbLU9h0m1TmFzXbr6q9NqH0fXovXHqDIbTIBeS6VQPZfMZ6mxx-5fOMmRX0bqzqntsuTtGJpqtwO5PFkau0GqO5qk_XaFnTxmk_H32H8Y8qzHb0nBLxr0F4r_Nz-CRo_rkEwVxj9v2U4YpgMfjzbtKEp9U-UOO4_",
        lastMessage: "Thanks for the opportunity! When can we schedule the interview?",
        time: "10:30 AM",
        unread: 2,
        online: true,
    },
    {
        id: 2,
        name: "Michael Chen",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnEZcJGEvOwlS1DgreAAUEjAeCX9mahe-bPmyrXi0ZD6PoE11-OOADaI7lnRbwwl6Gu0lWKbPauStTjOXFsOn3TzV43PbJiK8jLtMLPbvJSL5PtER1RPCNe55IaroYC0WXHQtdE2aZ8zfgjXGESPqC5c095E9-nHq7FUGD79ZnihWOrCAqi6QWCJzZ2MMFgbZl-96mVz93t3wgBd2rdJESTxX-2tYYcDBXcV8KY3oSmfzJFxoMaHMVtoR1zxdtK1sl0q63sZnSDL81",
        lastMessage: "I've attached my updated portfolio.",
        time: "Yesterday",
        unread: 0,
        online: false,
    },
    {
        id: 3,
        name: "Priya Patel",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkz3VSvygd77XYEoihahNJWA_7Uy8ihXaC2DqFKDA67t0p6VJ7d6OFk5DW_DibphVqrghWihPrPLuJeA3vMELkdGNG0vAJAYQttX-SdnLupA0plMAP1j2lK920tW_OhYWYh-RZRHT4foKx5QjhuRvniUEKKif2ONMhKrtsXUS7WMs2wPNfFaxiOLPTI74P_cXZcYuQjeBzhcvp72L1mohIfJGbQkjF-GAb38V0LTT_HuAaNHMnu314xnFk0PxsEsHP-K_aWAiSWAbJ",
        lastMessage: "Is the position still open?",
        time: "Mon",
        unread: 0,
        online: true,
    },
];

const messages = [
    {
        id: 1,
        senderId: 1,
        text: "Hi there! I saw your job posting for the Senior React Developer role.",
        time: "10:00 AM",
        isMe: false,
    },
    {
        id: 2,
        senderId: 0, // Me
        text: "Hello Sarah! Yes, we are still looking for candidates. Your profile looks impressive.",
        time: "10:05 AM",
        isMe: true,
        status: "read",
    },
    {
        id: 3,
        senderId: 1,
        text: "That's great to hear! I have over 5 years of experience with React and TypeScript.",
        time: "10:10 AM",
        isMe: false,
    },
    {
        id: 4,
        senderId: 1,
        text: "Thanks for the opportunity! When can we schedule the interview?",
        time: "10:30 AM",
        isMe: false,
    },
];

const ChatInbox: React.FC = () => {
    const [selectedChat, setSelectedChat] = useState<number | null>(1);
    const [mobileChatOpen, setMobileChatOpen] = useState(false);

    const currentChat = conversations.find(c => c.id === selectedChat);

    return (
        <div className="flex h-[calc(100vh-64px)] bg-gray-50 dark:bg-[#111921] overflow-hidden">
            {/* Sidebar - Conversation List */}
            <div className={clsx(
                "w-full md:w-80 lg:w-96 flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a2632] transition-all duration-300 absolute md:relative z-10 h-full",
                mobileChatOpen ? "hidden md:flex" : "flex"
            )}>
                {/* Header */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Messages</h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search messages..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border-none text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto">
                    {conversations.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => {
                                setSelectedChat(chat.id);
                                setMobileChatOpen(true);
                            }}
                            className={clsx(
                                "p-4 flex gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800/50",
                                selectedChat === chat.id ? "bg-blue-50 dark:bg-blue-900/10" : ""
                            )}
                        >
                            <div className="relative shrink-0">
                                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover" />
                                {chat.online && (
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-[#1a2632] rounded-full"></span>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className={clsx("font-semibold truncate", selectedChat === chat.id ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white")}>
                                        {chat.name}
                                    </h3>
                                    <span className="text-xs text-gray-500">{chat.time}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className={clsx("text-sm truncate pr-2", chat.unread > 0 ? "font-semibold text-gray-900 dark:text-white" : "text-gray-500")}>
                                        {chat.lastMessage}
                                    </p>
                                    {chat.unread > 0 && (
                                        <span className="w-5 h-5 flex items-center justify-center bg-blue-500 text-white text-xs font-bold rounded-full shrink-0">
                                            {chat.unread}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className={clsx(
                "flex-1 flex flex-col bg-white dark:bg-[#111921] w-full absolute md:relative z-20 h-full transition-transform duration-300",
                mobileChatOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
            )}>
                {selectedChat ? (
                    <>
                        {/* Chat Header */}
                        <div className="h-16 px-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a2632]">
                            <div className="flex items-center gap-3">
                                <button
                                    className="md:hidden p-2 -ml-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                                    onClick={() => setMobileChatOpen(false)}
                                >
                                    <ArrowLeft size={20} />
                                </button>
                                <div className="relative">
                                    <img src={currentChat?.avatar} alt={currentChat?.name} className="w-10 h-10 rounded-full object-cover" />
                                    {currentChat?.online && (
                                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-[#1a2632] rounded-full"></span>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">{currentChat?.name}</h3>
                                    <p className="text-xs text-green-500 font-medium">Online</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                                    <Phone size={20} />
                                </button>
                                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                                    <Video size={20} />
                                </button>
                                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                                    <MoreVertical size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#111921]">
                            {messages.map((msg) => (
                                <div key={msg.id} className={clsx("flex", msg.isMe ? "justify-end" : "justify-start")}>
                                    <div className={clsx(
                                        "max-w-[80%] lg:max-w-[60%] rounded-2xl px-4 py-3 shadow-sm",
                                        msg.isMe
                                            ? "bg-blue-500 text-white rounded-br-none"
                                            : "bg-white dark:bg-[#1a2632] text-gray-900 dark:text-white rounded-bl-none border border-gray-100 dark:border-gray-800"
                                    )}>
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                        <div className={clsx(
                                            "flex items-center justify-end gap-1 mt-1 text-[10px]",
                                            msg.isMe ? "text-blue-100" : "text-gray-400"
                                        )}>
                                            <span>{msg.time}</span>
                                            {msg.isMe && (
                                                msg.status === 'read' ? <CheckCheck size={14} /> : <Check size={14} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white dark:bg-[#1a2632] border-t border-gray-200 dark:border-gray-800">
                            <div className="flex items-center gap-2">
                                <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors">
                                    <Paperclip size={20} />
                                </button>
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        className="w-full pl-4 pr-10 py-3 rounded-full bg-gray-100 dark:bg-[#111921] border-none text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500">
                                        <Smile size={20} />
                                    </button>
                                </div>
                                <button className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:scale-105">
                                    <Send size={20} className="ml-0.5" />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
                        <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                            <Send size={32} className="text-gray-400" />
                        </div>
                        <p className="text-lg font-medium">Select a conversation to start chatting</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatInbox;
