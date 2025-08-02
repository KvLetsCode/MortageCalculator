import Termcomp from "../utli/Termcomp";
function Util() {
    return (
      
    <div className="grid grid-cols-2 gap-4 w-full max-w-md ">
      {/* Mortgage Term */}
      <div>
        <label className="block text-sm text-gray-600 mb-1 text-left ml-6 ">
          Mortgage Term
        </label>
        <div className="flex overflow-hidden rounded border border-blue-600 ml-6 focus-within:border-lime-600 group transition-colors duration-300">
          <Termcomp logo="years" name="years" />
        </div>
      </div>

      {/* Interest Rate */}
      <div>
        <label className="block text-sm text-gray-600 mb-1 text-left ml-4">
          Interest Rate
        </label>
        <div className="flex overflow-hidden rounded border border-blue-600 ml-4 mr-3 focus-within:border-lime-600 group transition-colors duration-300">
          <Termcomp logo="%" name="Interest" />
        </div>
      </div>
    </div>
  );
}

export default Util;
