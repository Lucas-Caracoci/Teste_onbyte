
const Form = () => {
    return (
        /* From Uiverse.io by themrsami */
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="w-full max-w-xl bg-gray-800 rounded-lg shadow-md p-6 " data-aos="fade-up">
                <h2 className="text-2xl font-bold text-gray-200 mb-4">Qual curso mais te interessou?</h2>

                <form className="flex flex-col">
                    <input placeholder="Nome Completo" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                    <input placeholder="Email" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />
                    <select className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
                        <option value="product-1">curso 1</option>
                        <option value="product-2">curso 2</option>
                        <option value="product-3">curso 3</option>
                    </select>
                    <input placeholder="Telefone" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number" />
                    <textarea placeholder="Alguma dúvida?" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" name="feedback"></textarea>

                    <button className="bg-gradient-to-r from-blue-900 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Submit</button>
                </form>
            </div>
        </div>

    );
}

export default Form;
