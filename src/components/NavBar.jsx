function Navbar() {
    return(
        <nav className="flex items-center justify-between px-8 py-5 bg-blue-900 text-white">
            <h1 className="text-5xl font-bold">
                StudentSpend
            </h1>

            
            <div className="flex gap-8">
               <a href="#">Dashboard</a>
               <a href="#">Transactions</a>
            </div>


        </nav>

    )
}

export default Navbar