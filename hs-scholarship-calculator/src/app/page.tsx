'use client';
import React, { useState } from 'react';
import Image from 'next/image';
const HarbourSpaceCalculator = () => {
  const [degreeType, setDegreeType] = useState<'bachelor' | 'master'>('bachelor');
  const [schoolYears, setSchoolYears] = useState(1);
  const [scholarshipPercentage, setScholarshipPercentage] = useState(0);
  
  const fees = {
    bachelor: 19900,
    master: 22900
  };
  
  const eurToThb = 37;
  
  const calculateCosts = () => {
    const yearlyFee = fees[degreeType];
    const totalOriginalCost = yearlyFee * schoolYears;
    const scholarshipAmount = (totalOriginalCost * scholarshipPercentage) / 100;
    const finalCost = totalOriginalCost - scholarshipAmount;
    
    return {
      yearlyFee,
      totalOriginalCost,
      scholarshipAmount,
      finalCost,
      finalCostThb: finalCost * eurToThb,
      totalOriginalCostThb: totalOriginalCost * eurToThb,
      scholarshipAmountThb: scholarshipAmount * eurToThb
    };
  };
  
  const costs = calculateCosts();

  const formatEur = (amount: number) => `€${amount.toLocaleString('en-EU')}`;
  const formatThb = (amount: number) => `฿${Math.round(amount).toLocaleString('en-US')}`;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
              <Image 
                src="/hero_img.png" 
                alt="Harbour.Space Institute of Technology @ UTCC"
                className="mx-auto max-w-md w-full h-auto"
                width={640}
                height={304}
              />
              <div style={{display: 'none'}} className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">HARBOUR.SPACE</h1>
                <div className="text-gray-600 mb-1">INSTITUTE OF TECHNOLOGY</div>
                <div className="w-64 h-px bg-gray-300 mx-auto mb-3"></div>
                <div className="text-gray-600">@ UTCC</div>
              </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Harbour.Space Scholarship Calculator</h2>
          <p className="text-gray-600">Calculate your tuition costs with scholarship benefits</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Program Details</h3>
            
            {/* Degree Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Degree Type</label>
              <div className="space-y-3">
                <label className="flex items-start cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="degree"
                    value="bachelor"
                    checked={degreeType === 'bachelor'}
                    onChange={(e) => setDegreeType(e.target.value as 'bachelor' | 'master')}
                    className="mt-1 mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Bachelor&apos;s Degree</div>
                    <div className="text-sm text-gray-600">{formatEur(fees.bachelor)} per year</div>
                  </div>
                </label>
                <label className="flex items-start cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="degree"
                    value="master"
                    checked={degreeType === 'master'}
                    onChange={(e) => setDegreeType(e.target.value as 'bachelor' | 'master')}
                    className="mt-1 mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Master&apos;s Degree</div>
                    <div className="text-sm text-gray-600">{formatEur(fees.master)} per year</div>
                  </div>
                </label>
              </div>
            </div>

            {/* School Years */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Study Duration: {schoolYears} {schoolYears === 1 ? 'year' : 'years'}
              </label>
              <input
                type="range"
                min="1"
                max="3"
                value={schoolYears}
                onChange={(e) => setSchoolYears(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-gray-500 text-xs mt-2">
                <span>1 year</span>
                <span>2 years</span>
                <span>3 years</span>
              </div>
            </div>

            {/* Scholarship Percentage */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Scholarship Percentage: {scholarshipPercentage}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={scholarshipPercentage}
                onChange={(e) => setScholarshipPercentage(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-gray-500 text-xs mt-2">
                <span>0%</span>
                <span>10%</span>
                <span>20%</span>
                <span>30%</span>
                <span>40%</span>
                <span>50%</span>
                <span>60%</span>
                <span>70%</span>
                <span>80%</span>
                <span>90%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Cost Breakdown</h3>
            
            <div className="space-y-4">
              {/* Original Cost */}
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-sm text-gray-600 mb-1">Total Original Cost</div>
                <div className="text-lg font-semibold text-gray-900">
                  {formatEur(costs.totalOriginalCost)}
                </div>
                <div className="text-sm text-gray-600">
                  {formatThb(costs.totalOriginalCostThb)}
                </div>
              </div>

              {/* Scholarship Savings */}
              {scholarshipPercentage > 0 && (
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-sm text-green-700 mb-1">Scholarship Savings ({scholarshipPercentage}%)</div>
                  <div className="text-lg font-semibold text-green-800">
                    -{formatEur(costs.scholarshipAmount)}
                  </div>
                  <div className="text-sm text-green-700">
                    -{formatThb(costs.scholarshipAmountThb)}
                  </div>
                </div>
              )}

              {/* Final Amount */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-sm text-blue-700 mb-3">Final Amount to Pay</div>
                
                {/* Per Year Breakdown */}
                <div className="space-y-2 mb-3">
                  {Array.from({ length: schoolYears }, (_, index) => {
                    const yearNumber = index + 1;
                    const yearlyFeeAfterScholarship = costs.yearlyFee * (1 - scholarshipPercentage / 100);
                    const yearlyFeeAfterScholarshipThb = yearlyFeeAfterScholarship * eurToThb;
                    
                    return (
                      <div key={yearNumber} className="flex justify-between items-center py-2 border-b border-blue-200 last:border-b-0">
                        <div className="text-sm text-blue-700">
                          {yearNumber === 1 ? '1st' : yearNumber === 2 ? '2nd' : '3rd'} Year
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-blue-900">
                            {formatEur(yearlyFeeAfterScholarship)}
                          </div>
                          <div className="text-sm text-blue-700">
                            {formatThb(yearlyFeeAfterScholarshipThb)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Total */}
                <div className="pt-2 border-t border-blue-300">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-blue-700 font-medium">Total</div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-900">
                        {formatEur(costs.finalCost)}
                      </div>
                      <div className="text-sm text-blue-700">
                        {formatThb(costs.finalCostThb)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exchange Rate Info */}
              <div className="text-center text-gray-500 text-xs p-3 bg-gray-50 rounded-lg border border-gray-200">
                Exchange Rate: 1 EUR = 37 THB
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-8 pb-8">
          <p>Harbour.Space Institute of Technology@UTCC</p>
          <p className="mt-1">Made by Nan Oo & Vetit K.</p>
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default HarbourSpaceCalculator;