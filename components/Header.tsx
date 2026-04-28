"use client";

import { ChevronDown } from "lucide-react";
import { signOut } from "next-auth/react";

const Header = () => {


    return (
        <header className="w-full border-b bg-white">
            <div className="flex items-center justify-between px-6 py-3">

                <div className="flex items-center gap-6">
                    <h1 className="text-lg font-semibold text-gray-900">
                        ticktock
                    </h1>

                    <nav>
                        <ul className="flex items-center gap-4 text-sm text-gray-600">
                            <li className="cursor-pointer hover:text-black">
                                Timesheets
                            </li>
                        </ul>
                    </nav>
                </div>


                <div className="relative group">

                    {/* Trigger */}
                    <div className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 group-hover:text-black">
                        <span>John Doe</span>
                        <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                    </div>

                    {/* Dropdown */}
                    <div className="absolute right-0 top-[25px] w-48 bg-white border rounded-xl shadow-lg p-2
    invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">

                        <button
                            onClick={() => signOut({ callbackUrl: "/login", redirect: true  })}
                            className="w-full px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition"
                        >
                            Logout
                        </button>

                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;