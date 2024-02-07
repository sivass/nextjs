export default function Login(){
    return (<>
        <div className="p-6 lg:w-2/4 sm:w-fit mx-auto bg-slate-50 dark:bg-slate-500 flex flex-col items-center space-x-2 text-black dark:text-white">
            <div className="w-full p-4">
                <p className="lg:text-5xl sm:text-xl font-bold text-center p-2">YouTube TimeTracker</p>
            </div>
            <div className="w-full">
                <input className="m-3 p-2 w-full h-12 rounded-2xl border-2 border-solid border-gray-400"  type="email" placeholder="Type your email address to start ...."/>
            </div>
        </div>
    </>)
}