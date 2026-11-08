import React from 'react';
import { FilterState } from '../types';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';

interface PropertySearchProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  totalResults: number;
}

export const PropertySearch: React.FC<PropertySearchProps> = ({
  filters,
  onFilterChange,
  totalResults,
}) => {
  const handleChange = (key: keyof FilterState, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const handleReset = () => {
    onFilterChange({
      search: '',
      city: 'All',
      type: 'All',
      priceMax: 3000000000,
      bedrooms: 'All',
      status: 'All',
    });
  };

  return (
    <div id="properties-section" className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-xl mb-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 mb-6 border-b border-neutral-100 gap-4">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
            Curated Luxury Portfolio
          </h2>
          <p className="text-sm text-neutral-500 font-light mt-1">
            Showing {totalResults} exclusive Nigerian properties ready for acquisition
          </p>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-amber-600 transition-colors px-3 py-2 rounded-lg border border-neutral-200"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Filters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search input */}
        <div className="lg:col-span-1">
          <label className="block text-xs font-semibold text-neutral-600 uppercase mb-1.5">Keyword Search</label>
          <div className="relative">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Ikoyi, Banana Island..."
              value={filters.search}
              onChange={(e) => handleChange('search', e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* City Filter */}
        <div>
          <label className="block text-xs font-semibold text-neutral-600 uppercase mb-1.5">City</label>
          <select
            value={filters.city}
            onChange={(e) => handleChange('city', e.target.value)}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 cursor-pointer"
          >
            <option value="All">All Cities</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Port Harcourt">Port Harcourt</option>
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-xs font-semibold text-neutral-600 uppercase mb-1.5">Property Type</label>
          <select
            value={filters.type}
            onChange={(e) => handleChange('type', e.target.value)}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 cursor-pointer"
          >
            <option value="All">All Types</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Luxury Villa">Luxury Villa</option>
            <option value="Smart Apartment">Smart Apartment</option>
            <option value="Townhouse">Townhouse</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-xs font-semibold text-neutral-600 uppercase mb-1.5">Bedrooms</label>
          <select
            value={filters.bedrooms}
            onChange={(e) => handleChange('bedrooms', e.target.value)}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 cursor-pointer"
          >
            <option value="All">Any Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
            <option value="5">5+ Bedrooms</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-xs font-semibold text-neutral-600 uppercase mb-1.5">Status</label>
          <select
            value={filters.status}
            onChange={(e) => handleChange('status', e.target.value)}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 cursor-pointer"
          >
            <option value="All">All Status</option>
            <option value="For Sale">For Sale</option>
            <option value="Off-Plan">Off-Plan</option>
          </select>
        </div>
      </div>
    </div>
  );
};
