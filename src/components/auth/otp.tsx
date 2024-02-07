export default function OTP(){
    return (<>
        <div className="p-6 lg:w-2/4 sm:w-fit mx-auto bg-slate-50 dark:bg-slate-500 flex flex-col items-center space-x-2">
            <div className="w-full p-2">
                <p className="text-xl font-semibold text-center p-2">Please enter your OTP code to start the session.</p>
            </div>
            <div className="w-1/4">
                <input className="m-3 p-2 w-full h-12 rounded-2xl border-2 border-solid border-gray-400"  type="email" placeholder=""/>
            </div>
        </div>
    </>)
}