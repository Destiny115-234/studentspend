import { useState } from "react"
import RecentTransactions from "./RecentTransactions"
import AddTransactions from "./AddTransactions"

function Dashboard(){

    const [transactions, setTransactions] = useState([])
    const expense = transactions.filter((transaction) => {
        return transaction.type === "expense"
    })

    const income = transactions.filter((transaction) => {
        return transaction.type === "income"
    })

    const TotalExpenses = expense.reduce ((sum, transaction) => {
        return sum + Number(transaction.amount)
    }, 0)

    const TotalIncome = income.reduce ((sum, transaction) => {
        return sum + Number(transaction.amount)
    }, 0)

    const TotalBalance = TotalIncome -  TotalExpenses
    return(
        <main className=" bg-blue-900 px-8 py-10">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-white">
                    Good Afternoon ...
                </h2>

                <p className="mt-3 font-medium text-gray-900">
                    Here's your spending overview
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-black text-white  p-6 shadow-sm">
                    <p className="text-white">Total Balance</p>
                    <h3 className="mt-3 text-3xl font-bold tracking-tight">
                       ₦{TotalBalance. toLocaleString()}
                    </h3>
                </div>

                <div className="rounded-3xl bg-black text-white p-6 shadow-sm">
                    <p className="text-green-600">Total Income</p>
                    <h3 className="mt-3 text-3xl font-bold tracking-tight">
                       ₦{TotalIncome. toLocaleString()}
                    </h3>
                </div>

                <div className="rounded-3xl bg-black text-white p-6 shadow-sm">
                    <p className="text-red-600">Total Expenses</p>
                    <h3 className="mt-3 text-3xl font-bold tracking-tight">
                      ₦{TotalExpenses. toLocaleString()}
                    </h3>
               </div>

            </div>

            <RecentTransactions transactions={transactions} />
            <AddTransactions setTransactions={setTransactions} />
           

        </main>
    )
}

export default Dashboard