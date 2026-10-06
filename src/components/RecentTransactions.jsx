

function RecentTransactions ({transactions}){
    return(
        <section className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-white">
                Recent Transcations
            </h2>

            <div className="rounded-1xl bg-black text-white p-6 shadow-small">
                {transactions.map((transaction) => (
                    <div 
                    key={transaction.id}
                    className="flex items-center justify-between border-b py-4 last:border-b-0"
                    >
                        <div>
                          <p className="font-semibold">{transaction.name}</p>
                          <p className="text-sm text-gray-500">{transaction.date}</p>
                        </div>

                        <p 
                            className={`font-semibold ${
                            transaction.type === "income"
                            ? "text-green-600"
                            : "text-red-600"
                            }`}
                           
                        >
                            ₦{Number(transaction.amount).toLocaleString()}
                        </p>
                   </div>

                ))}

            </div>
        </section>
    )

}

export default RecentTransactions