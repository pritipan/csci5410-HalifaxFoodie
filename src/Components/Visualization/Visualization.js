import React, { useState } from 'react'
import { getUserInfo } from '../../utils/AuthUtils'

const Visualization = () => {

    const [ingredients, setIngredients] = useState("")
    const user = getUserInfo()
    return (
        <div>

            <div className="container mx-auto px-4">
                <h1 class="text-3xl md:text-4xl font-medium mb-4 text-indigo-400">
                    Visualization
                </h1>


            </div>
        </div>
    )
}

export default Visualization