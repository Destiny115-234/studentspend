function Dashboard(){
    return(
        <main className="px-8 py-10">
            <div className="mb-8">
                <h2 className="text-2xl font-bold">
                    Good Afternoon ...
                </h2>

                <p className="mt-3 font-medium text-gray-500">
                    Here's your spending overview
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-2xl border p-6">
                    <p className="text-gray-500">Total Balance</p>
                    <h3 className="mt-3 text-3xl font-bold">
                        ₦45,000
                    </h3>
                </div>

                <div className="rounded-2xl border p-6">
                    <p className="text-gray-500">Total Income</p>
                    <h3 className="mt-3 text-3xl font-bold">
                       ₦70,000
                    </h3>
                </div>

                <div className="rounded-2xl border p-6">
                    <p className="text-gray-500">Total Expenses</p>
                    <h3 className="mt-3 text-3xl font-bold">
                      ₦25,000
                    </h3>
               </div>

            </div>

        </main>
    )
}

export default Dashboard