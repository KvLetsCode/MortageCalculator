function MortageType() {
  return (
    <div className="grid mt-10 mb-4 gap-1">
      <label className="text-gray-600 text-left ml-6 text-sm ">
        Mortage Type
      </label>
      

      <div className="flex items-center border border-blue-600 h-8 mx-6 rounded-sm cursor-pointer  hover:border-lime-300 focus-within:bg-lime-100">
        <input
          id="default-radio-1"
          type="radio"
          name="Repayment"
          value="Repayments"
          className="w-4 h-4 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-3 cursor-pointer"
        />
        <label
          htmlFor="default-radio-1"
          className="ms-2 text-sm font-medium text-black cursor-pointer "
        >
          Repayment
        </label>
      </div>
      <div className="flex items-center mb-4 border border-blue-600 h-8 mx-6 rounded-sm cursor-pointer hover:border-lime-300 focus-within:bg-lime-100">
        <input
          
          id="default-radio-2"
          type="radio"
          value="Interest"
          name="Repayment"
          className="w-4 h-4  bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-3 cursor-pointer "
        />
        <label
          htmlFor="default-radio-2"
          className="ms-2 text-sm font-medium text-black cursor-pointer"
        >
          Interest Only
        </label>
      </div>
    </div>
  );
}

export default MortageType;
