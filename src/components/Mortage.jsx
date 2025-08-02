/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MortageReapy from "./MortageReapy";
import MortageType from "./MortageType";
import Util from "./Util";



function Mortage({calculateMortgage,DisReset}) {
  function handleFormSub(e) {
    e.preventDefault(); // Stop default form submission

    const formData = new FormData(e.target);
    const Amount = parseFloat(formData.get('Amount')); // Replace with actual name
    const Terms = parseInt(formData.get('years'))
    const Rates = parseFloat(formData.get('Interest'))
    const MortageType = formData.get('Repayment')
    console.log(MortageType);

    if (!Amount || !Terms || !Rates || !MortageType) {
      alert("Please fill all fields.");
      return;
    }
    
    calculateMortgage(Amount,Rates,Terms,MortageType)
    
    
  }
  return (
    <form onSubmit={handleFormSub} className="bg-white">
      
        <ul className="flex justify-between mt-6 px-5">
          <h4 className="text-black font-bold ">Mortage Calculator</h4>
          <button
            type="reset"
            onClick={() => DisReset(false)}
            className="text-black border-b-1 rounded-tl-sm rounded-tr-sm cursor-pointer hover:bg-blue-100 text-sm p-0.5"
          >
            Clear All
          </button>
        </ul>
        <MortageReapy />
        <div className="mb-4 mt-10">
          <Util />
        </div>

        <MortageType />

        <button type="submit" className="flex justify-center gap-2 border border-lime-400 rounded-4xl p-1  pr-1 ml-6 bg-green-100 mb-4 w-55 items-center cursor-pointer hover:shadow">
          <img src="/icon-calculator.svg" alt="Calculator" />
          <span className="text-black">Calculate Repayments</span>
        </button>

      
    </form>
  );
}

export default Mortage;
