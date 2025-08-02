

function MortageReapy() {
  return (
      <>
      <div className="mb-4 mt-10">
          <label className="block text-sm text-gray-600 mb-1 text-left ml-6">
            Mortgage Amount
          </label>
          <div className="flex items-center border-blue-600 border mx-6 rounded-sm focus-within:border-lime-600 group transition-colors duration-300">
            <span className="bg-blue-100 text-blue-900 px-3 py-2 rounded-l text-lg font-semibold group-focus-within:bg-lime-200 transition-colors duration-300">
              £
            </span>
            <input
                type="text"
                name="Amount"
              placeholder="300,000"
            className="w-77 px-3 py-2 outline-none text-black font-semibold transition-colors duration-300"
            required
            />
          </div>
        </div>
      </>
  )
}

export default MortageReapy