import React, { useState } from 'react';
import { formatNaira } from '../data/properties';
import { Calculator, DollarSign, Percent, Calendar, ArrowRight } from 'lucide-react';

export const MortgageCalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(500000000); // ₦500M default
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20%
  const [interestRate, setInterestRate] = useState<number>(15); // 15% p.a.
  const [loanTermYears, setLoanTermYears] = useState<number>(15); // 15 years

  const downPayment = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = propertyPrice - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  const monthlyPayment =
    monthlyInterestRate === 0
      ? loanAmount / numberOfPayments
      : (loanAmount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  return (
    <section id="mortgage" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-amber-600 block mb-2">
            Financial Planning
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Nigerian Mortgage & Payment Calculator
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-light">
            Plan your property acquisition with precision. Calculate your down payment, estimated monthly repayments, and total financing structure in Naira (₦).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xl">
          
          {/* Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Property Price */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase text-neutral-700">Property Purchase Price</label>
                <span className="font-serif font-bold text-amber-600 text-lg">{formatNaira(propertyPrice)}</span>
              </div>
              <input
                type="range"
                min="100000000"
                max="3000000000"
                step="25000000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                <span>₦100M</span>
                <span>₦1.5B</span>
                <span>₦3.0B</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase text-neutral-700">Initial Deposit / Down Payment ({downPaymentPercent}%)</label>
                <span className="font-bold text-neutral-900 text-base">{formatNaira(downPayment)}</span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                <span>10%</span>
                <span>30%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase text-neutral-700">Interest Rate (P.A.)</label>
                <span className="font-bold text-neutral-900 text-base">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                <span>5%</span>
                <span>17.5%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Loan Term */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase text-neutral-700">Loan Tenure (Years)</label>
                <span className="font-bold text-neutral-900 text-base">{loanTermYears} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={loanTermYears}
                onChange={(e) => setLoanTermYears(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                <span>1 Year</span>
                <span>12 Years</span>
                <span>25 Years</span>
              </div>
            </div>

          </div>

          {/* Results Box (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-widest font-bold mb-4">
                <Calculator className="w-4 h-4" />
                <span>Repayment Breakdown</span>
              </div>

              <div className="mb-6 pb-6 border-b border-neutral-800">
                <span className="text-xs uppercase tracking-wider text-neutral-400 block mb-1">Estimated Monthly Payment</span>
                <span className="font-serif text-4xl sm:text-5xl font-bold text-amber-400 tracking-tight">
                  {formatNaira(Math.round(monthlyPayment))}
                </span>
                <span className="text-xs text-neutral-400 mt-1 block">/ month for {loanTermYears} years</span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-neutral-300">
                  <span>Purchase Price:</span>
                  <span className="font-semibold text-white">{formatNaira(propertyPrice)}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Initial Deposit:</span>
                  <span className="font-semibold text-white">{formatNaira(downPayment)}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Financed Loan Amount:</span>
                  <span className="font-semibold text-white">{formatNaira(loanAmount)}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <a
                href="#contact"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold rounded-xl transition-all shadow text-center block text-sm"
              >
                Speak with Mortgage Advisor
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
