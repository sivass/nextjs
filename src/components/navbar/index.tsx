export default function Navbar(){
    return (
        <div className="w-full h-20 p-6">
            <ul className=" absolute right-20 mr-4 flex flex-row justify-end space-x-2 cursor-pointer  text-black dark:text-white">
                <li className="">
                    <button className="p-2 rounded-md bg-blue-500 text-white">login</button></li>
            </ul>
        </div>
    );
}