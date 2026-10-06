import { useState } from "react"
function AddTransactions ({setTransactions}){
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("expense")

    const handleAddTransaction = () => {
        const newTransaction = {
            id: Date.now(),
            name: name,
            amount: amount,
            type: type,
        }

        setTransactions((currentTransactions) => [
         ...currentTransactions,
         newTransaction,
        ])
    }
    return(
        <section className= "mt-10">
            <h2 className="mb-4 text-2xl font-bold text-white">
                Add Transcation
            </h2>

            <div className="rounded-1xl bg-black text-white p-6 shadow-sm">
                <label className="block">
                    <span className="mb-4 block text-sm font-medium">
                        Transaction name
                    </span>

                    <input
                    type= "text"
                    placeholder="eg.Food"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-sm border px-4 py-2"
                    />

                </label>

                <label className=" mt-4 block">
                    <span className="mb-4 block text-sm font-medium">
                        Transaction Amount
                    </span>

                    <input
                    type="number"
                    placeholder="eg 2500"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    className="w-full rounded-sm border px-4 py-2"
                    />
            
                </label>

                <label className="mt-4 block">
                    <span className="mb-4 block text-sm font-medium">
                        Type
                    </span>

                    <select 
                    className="w-full rounded-sm border px-4 py-2"
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                    >
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>

                    </select>

                </label>

                <button
                type="button"
                onClick={handleAddTransaction}
                className="mt-6 w-full rounded-lg bg-white px-4 py-2 font-semibold text-black"
                >
                    Add Transaction
                </button>

            </div>

        </section>

    )
}

export default AddTransactions