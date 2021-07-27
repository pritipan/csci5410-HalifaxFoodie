import React, { useState } from 'react'

const AddItem = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    
    return (
        <div className="container mx-auto px-4">
            <h1 class="text-3xl md:text-4xl font-medium mb-4 text-indigo-400">
                Add Item
            </h1>

            <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Item Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Item Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Item Price
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="number"
                            placeholder="Item Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={() => {
                        // addDataToDynamoDB()
                    }}>
                    Submit
                </button>

            </form>
        </div>
    )
}

export default AddItem
