import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-[#F8F8F8]">
    <div className="max-w-screen-xl mx-auto px-4 py-14 md:py-28 gap-12 text-gray-600 bg-[#F8F8F8] md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-large text-[#7D5A50] font-medium">
                Design with everyone in mind.
            </h1>
            <h2 className="text-4xl text-[#9F5F80] font-extrabold mx-auto md:text-5xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#850E35] to-[#FF9494]"> Resume building made fast and easy with our powerful editor.</span>
            </h2>
            <p className="max-w-2xl mx-auto">
            Update your resume effortlessly, choose eye-catching templates, and download with one click.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <Link to="/editor" className="block py-2 px-8 text-white font-medium bg-[#f42d6f] duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                    Try Now editor
                </Link>
               
            </div>
        </div>
        <div className="mt-10 md:mt-20 flex justify-center">
            <img src="./images/ResumeEditor.png" className="w-full max-w-[1000px] shadow-2xl rounded-lg border" alt="" />
        </div>
    </div>
</section>
  );
}

export default Hero;