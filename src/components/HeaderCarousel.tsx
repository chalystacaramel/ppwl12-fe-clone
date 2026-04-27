    export default function HeaderCarousel() {
    return (
        <section className="hero-gradient relative overflow-hidden pb-16 pt-8 lg:pb-24 lg:pt-16">
        {/* Floating Icons - Left Side */}
        <div className="absolute left-4 top-20 lg:left-16 lg:top-28 animate-float hidden md:block z-20">
            <div className="bg-[#f9c846] rounded-2xl p-4 shadow-xl relative">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h10" stroke="#191d3a" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <div className="absolute -right-1 -top-1 bg-[#37a1bf] rounded-full w-5 h-5 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
            </div>
            </div>
        </div>
    
        <div className="absolute left-8 top-48 lg:left-24 lg:top-56 animate-float-delayed hidden md:block z-20">
            <div className="bg-white rounded-2xl p-3 shadow-xl">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
        </div>
    
        {/* Floating Icons - Right Side */}
        <div className="absolute right-4 top-20 lg:right-16 lg:top-28 animate-float-delayed hidden md:block z-20">
            <div className="bg-[#24292e] rounded-2xl p-4 shadow-xl">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            </div>
        </div>
    
        <div className="absolute right-8 top-48 lg:right-24 lg:top-56 animate-float hidden md:block z-20">
            <div className="bg-white rounded-2xl p-3 shadow-xl">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11L12 14L22 4" stroke="#37a1bf" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#37a1bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
        </div>
    
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight">
                Meet the night shift.
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                Notion agents keep work moving 24/7. They capture knowledge, answer
                questions, and push projects forward—all while you sleep.
            </p>
    
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                <a href="#" className="btn-primary">
                Get Notion free
                </a>
                <a href="#" className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-xl font-medium transition-all text-base">
                Request a demo
                </a>
            </div>
    
            {/* Product Screenshot */}
            <div className="relative max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Browser Header */}
                <div className="bg-[#f7f7f7] px-4 py-3 flex items-center border-b border-gray-200">
                    <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                    </div>
                    <div className="flex-1 flex justify-center">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center text-gray-400">
                        <span className="mr-3 text-lg">‹</span>
                        <span className="text-lg">›</span>
                        </div>
                        <div className="flex items-center bg-white rounded-lg px-4 py-1.5 text-sm text-gray-600 border shadow-sm">
                        <span className="flex items-center">
                            <span className="text-[#37a1bf] mr-2">⚡</span>
                            Ramp HQ
                        </span>
                        <span className="ml-3 text-gray-300">+</span>
                        </div>
                    </div>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400 text-sm">
                    <span>Share</span>
                    <span className="text-lg">☆</span>
                    <span className="text-lg">⋯</span>
                    </div>
                </div>
    
                {/* App Content */}
                <div className="flex min-h-[400px]">
                    {/* Sidebar */}
                    <div className="w-52 bg-[#fbfbfa] border-r border-gray-100 p-3 hidden sm:block">
                    <div className="flex items-center space-x-2 mb-5 px-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-[#37a1bf] to-[#2d8ba6] rounded flex items-center justify-center text-white text-xs font-bold">⚡</div>
                        <span className="font-semibold text-sm text-gray-800">Ramp</span>
                        <span className="text-gray-400">▾</span>
                    </div>
    
                    <div className="space-y-0.5 text-sm text-gray-600 mb-5">
                        <div className="flex items-center space-x-2.5 px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer">
                        <span className="text-gray-400 w-4">🔍</span>
                        <span>Search</span>
                        </div>
                        <div className="flex items-center space-x-2.5 px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer">
                        <span className="text-gray-400 w-4">🏠</span>
                        <span>Home</span>
                        </div>
                        <div className="flex items-center space-x-2.5 px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer">
                        <span className="text-gray-400 w-4">📅</span>
                        <span>Meetings</span>
                        </div>
                        <div className="flex items-center space-x-2.5 px-2 py-1.5 bg-gray-100 rounded cursor-pointer">
                        <span className="text-gray-400 w-4">✨</span>
                        <span>Notion AI</span>
                        </div>
                        <div className="flex items-center space-x-2.5 px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer">
                        <span className="text-gray-400 w-4">📥</span>
                        <span>Inbox</span>
                        </div>
                    </div>
    
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider px-2 mb-2 font-medium">Agents</p>
                        <div className="space-y-0.5 text-sm text-gray-600">
                        <div className="flex items-center space-x-2.5 px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer">
                            <span className="w-2 h-2 bg-amber-400 rounded-full" />
                            <span>Task routing agent</span>
                        </div>
                        <div className="flex items-center space-x-2.5 px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer">
                            <span className="w-2 h-2 bg-orange-400 rounded-full" />
                            <span>Status update agent</span>
                        </div>
                        <div className="flex items-center space-x-2.5 px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer">
                            <span className="w-2 h-2 bg-violet-400 rounded-full" />
                            <span>Q&A agent</span>
                        </div>
                        <div className="flex items-center space-x-2.5 px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer">
                            <span className="w-2 h-2 bg-red-400 rounded-full" />
                            <span>IT help desk</span>
                        </div>
                        </div>
                    </div>
                    </div>
    
                    {/* Main Content */}
                    <div className="flex-1 p-6 bg-white">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#37a1bf] to-[#2d8ba6] rounded-lg flex items-center justify-center text-white font-bold text-lg">⚡</div>
                        <h2 className="text-xl font-bold text-gray-900">Ramp HQ</h2>
                    </div>
    
                    {/* Tabs */}
                    <div className="flex space-x-1 border-b border-gray-200 mb-5">
                        <button type="button" className="px-3 py-2 text-sm border-b-2 border-gray-900 font-medium text-gray-900">Company tasks</button>
                        <button type="button" className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">My tasks</button>
                        <button type="button" className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">Current sprint</button>
                        <button type="button" className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">Timeline</button>
                        <button type="button" className="px-3 py-2 text-sm text-gray-400">+</button>
                    </div>
    
                    {/* Kanban Board */}
                    <div className="grid grid-cols-4 gap-3">
                        {/* To-do */}
                        <div>
                        <div className="flex items-center space-x-2 mb-3">
                            <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm" />
                            <span className="text-sm font-medium text-gray-700">To-do</span>
                            <span className="text-xs text-gray-400 bg-gray-100 px-1.5 rounded">10</span>
                        </div>
                        <div className="space-y-2">
                            <div className="bg-white border border-gray-200 rounded-lg p-3 text-sm shadow-sm hover:shadow transition-shadow cursor-pointer">
                            <p className="text-gray-700 leading-snug">Update help center and office documentation</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-3 text-sm shadow-sm hover:shadow transition-shadow cursor-pointer">
                            <p className="text-gray-700 leading-snug">Review campaign assets</p>
                            </div>
                        </div>
                        </div>
    
                        {/* In Progress */}
                        <div>
                        <div className="flex items-center space-x-2 mb-3">
                            <span className="w-2.5 h-2.5 bg-amber-400 rounded-sm" />
                            <span className="text-sm font-medium text-gray-700">In progress</span>
                            <span className="text-xs text-gray-400 bg-gray-100 px-1.5 rounded">8</span>
                        </div>
                        <div className="space-y-2">
                            <div className="bg-white border border-gray-200 rounded-lg p-3 text-sm shadow-sm hover:shadow transition-shadow cursor-pointer">
                            <p className="text-gray-700 leading-snug">Sales demo sync</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-3 text-sm shadow-sm hover:shadow transition-shadow cursor-pointer flex items-center justify-between">
                            <p className="text-gray-700 leading-snug">Launch demo video</p>
                            <span className="text-amber-500">🎬</span>
                            </div>
                        </div>
                        </div>
    
                        {/* In Review */}
                        <div>
                        <div className="flex items-center space-x-2 mb-3">
                            <span className="w-2.5 h-2.5 bg-violet-400 rounded-sm" />
                            <span className="text-sm font-medium text-gray-700">In review</span>
                            <span className="text-xs text-gray-400 bg-gray-100 px-1.5 rounded">3</span>
                        </div>
                        <div className="space-y-2">
                            <div className="bg-white border border-gray-200 rounded-lg p-3 text-sm shadow-sm hover:shadow transition-shadow cursor-pointer">
                            <p className="text-gray-700 leading-snug">Weekly sales status report</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-3 text-sm shadow-sm hover:shadow transition-shadow cursor-pointer">
                            <p className="text-gray-700 leading-snug">Marketing campaign designs</p>
                            </div>
                        </div>
                        </div>
    
                        {/* Complete */}
                        <div>
                        <div className="flex items-center space-x-2 mb-3">
                            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-sm" />
                            <span className="text-sm font-medium text-gray-700">Complete</span>
                            <span className="text-xs text-gray-400 bg-gray-100 px-1.5 rounded">24</span>
                        </div>
                        <div className="space-y-2">
                            <div className="bg-white border border-gray-200 rounded-lg p-3 text-sm shadow-sm hover:shadow transition-shadow cursor-pointer">
                            <p className="text-gray-700 leading-snug">Project onboarding</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-3 text-sm shadow-sm hover:shadow transition-shadow cursor-pointer">
                            <p className="text-gray-700 leading-snug">Finalize launch timeline</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    }