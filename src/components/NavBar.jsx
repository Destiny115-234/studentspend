function Navbar() {
    return(
        <nav className="flex items-center justify-between px-8 py-5">
            <h1 className="text-3xl font-bold">
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