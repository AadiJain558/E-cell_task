import React from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom'; 

function PageB() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-24 h-24 border-4 border-[#FF0F7B] rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-20 left-10 w-24 h-24 border-4 border-[#45D1FD] rotate-45 animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-white opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FF0F7B] opacity-10 mask-guard transform -rotate-12"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#45D1FD] opacity-10 mask-guard transform rotate-12"></div>
      </div>
      <main className="relative min-h-screen flex items-center justify-center px-6 py-12">
        <div className="relative z-10 bg-zinc-800/50 p-8 rounded-3xl backdrop-blur-lg border-2 border-[#FF0F7B] max-w-md w-full mx-auto hover:border-[#45D1FD] transition-all duration-500">
          <div className="text-center space-y-6">
            <div className="relative mx-auto w-48 h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF0F7B] to-[#45D1FD] rounded-full animate-spin-slow blur-lg opacity-70"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-[#45D1FD]">
                <img
                src="https://instagram.fdel29-1.fna.fbcdn.net/v/t51.2885-19/449048620_456716627105821_7959423652343203960_n.jpg?_nc_ht=instagram.fdel29-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=6s6dS6rzfgcQ7kNvgHp6gml&_nc_gid=df983f941a3442749de3c0223e193e12&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYBEjeR9d31xE2bSBsPvbpC7vohieOPB9OpXipm8AbUcvQ&oe=67971E97&_nc_sid=7d3ac5"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-['Press_Start_2P'] text-gradient leading-relaxed">
                PLAYER 456
              </h1>
              <h2 className="text-xl font-bold text-white">Aadi Jain</h2>
              <p className="text-[#45D1FD] font-mono">Registration #:20233002</p>
            </div>
            <a
              href="https://instagram.com/aadi_is_lost"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF0F7B] to-[#45D1FD] text-white rounded-full hover:scale-105 transition-all duration-300 font-bold shadow-neon"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </a>
            <div className="pt-6 border-t border-[#FF0F7B]/30 mt-6">
              <p className="text-[#45D1FD] text-sm font-mono animate-pulse">
                "Life is like a game, there are many players. If you don't play with them, they'll play with you."
              </p>
            </div>
          </div>
        </div>

        
        <div className="relative z-10 mt-12 max-w-md w-full mx-auto">
          <Link to="/" className="block p-8 bg-transparent border-4 border-yellow-500 rounded-xl text-center text-white hover:bg-yellow-500 transition duration-300">
            <h2 className="text-2xl font-bold mb-4">Squid Game</h2>
            <p className="text-lg">Are you ready to play? Go back to the main route.</p>

            
            <div className="absolute top-[-25px] left-[-25px]">
              <div className="w-12 h-12 border-4 border-yellow-500 transform rotate-45 bg-transparent"></div> {/* Square */}
            </div>
            <div className="absolute top-[-25px] right-[-25px]">
              <div className="w-12 h-12 rounded-full border-4 border-yellow-500 bg-transparent"></div> {/* Circle */}
            </div>
            <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-yellow-500 bg-transparent"></div> {/* Triangle */}
            </div>
          </Link>
        </div>
      </main>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+CjxwYXRoIGQ9Ik0yOCAwTDI4IDM0TDAgNTBMMCA4NEwyOCAxMDBMNTYgODRMNTYgNTBMMjggMzQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-5 pointer-events-none"></div>
    </div>
  );
}

export default PageB;
