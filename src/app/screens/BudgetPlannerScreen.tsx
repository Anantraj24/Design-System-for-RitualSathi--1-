import { useState } from 'react';
import { Plus, TrendingUp, Lightbulb } from 'lucide-react';
import { BottomNavigation } from '../components/BottomNavigation';

interface CategoryBudget {
  id: string;
  name: string;
  icon: string;
  allocated: number;
  spent: number;
  color: string;
}

interface BudgetPlannerScreenProps {
  onNavigate?: (tab: string) => void;
}

export function BudgetPlannerScreen({ onNavigate }: BudgetPlannerScreenProps) {
  const [activeTab, setActiveTab] = useState('budget');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (onNavigate) {
      onNavigate(tab);
    }
  };

  const formatIndianNumber = (num: number): string => {
    const numStr = num.toString();
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNumbers = numStr.substring(0, numStr.length - 3);
    if (otherNumbers !== '') {
      return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
    }
    return lastThree;
  };

  const totalBudget = 250000;
  const totalSpent = 85000;
  const totalRemaining = totalBudget - totalSpent;
  const spentPercentage = (totalSpent / totalBudget) * 100;

  const categories: CategoryBudget[] = [
    {
      id: 'decoration',
      name: 'Decoration',
      icon: '🎨',
      allocated: 50000,
      spent: 15000,
      color: '#F97316',
    },
    {
      id: 'catering',
      name: 'Catering',
      icon: '🍽️',
      allocated: 90000,
      spent: 45000,
      color: '#22A55A',
    },
    {
      id: 'photography',
      name: 'Photography',
      icon: '📸',
      allocated: 35000,
      spent: 20000,
      color: '#60A5FA',
    },
    {
      id: 'priest',
      name: 'Priest / Ritual Items',
      icon: '🕉️',
      allocated: 15000,
      spent: 5000,
      color: '#FBBF24',
    },
    {
      id: 'venue',
      name: 'Venue',
      icon: '🏛️',
      allocated: 50000,
      spent: 0,
      color: '#EC4899',
    },
    {
      id: 'music',
      name: 'Music / Lights',
      icon: '🎵',
      allocated: 10000,
      spent: 0,
      color: '#8B5CF6',
    },
  ];

  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#F3F4F6] px-4 pt-3 pb-4">
        <h1
          className="font-bold text-[#1F2937] mb-1"
          style={{ fontSize: '24px', lineHeight: '32px' }}
        >
          Budget Planner
        </h1>
        <p
          className="text-[#6B7280]"
          style={{ fontSize: '14px', lineHeight: '20px' }}
        >
          Track and manage your ceremony expenses
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-24">
        <div className="max-w-md mx-auto space-y-5">
          {/* Total Budget Summary Card */}
          <div className="bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-[20px] p-6 shadow-[0_8px_24px_rgba(249,115,22,0.25)]">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-white" />
              <span
                className="text-white font-semibold"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                Overall Budget
              </span>
            </div>

            {/* Total Budget */}
            <div className="mb-5">
              <p
                className="text-white/90 mb-1"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                Total Budget
              </p>
              <p
                className="text-white font-bold"
                style={{ fontSize: '32px', lineHeight: '40px' }}
              >
                ₹{formatIndianNumber(totalBudget)}
              </p>
            </div>

            {/* Spent & Remaining */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-3">
                <p
                  className="text-white/90 mb-1"
                  style={{ fontSize: '13px', lineHeight: '18px' }}
                >
                  Spent
                </p>
                <p
                  className="text-white font-bold"
                  style={{ fontSize: '20px', lineHeight: '28px' }}
                >
                  ₹{formatIndianNumber(totalSpent)}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-3">
                <p
                  className="text-white/90 mb-1"
                  style={{ fontSize: '13px', lineHeight: '18px' }}
                >
                  Remaining
                </p>
                <p
                  className="text-white font-bold"
                  style={{ fontSize: '20px', lineHeight: '28px' }}
                >
                  ₹{formatIndianNumber(totalRemaining)}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-white/90"
                  style={{ fontSize: '13px', lineHeight: '18px' }}
                >
                  Budget Used
                </span>
                <span
                  className="text-white font-bold"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  {spentPercentage.toFixed(0)}%
                </span>
              </div>
              <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-500"
                  style={{ width: `${spentPercentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Category Budget Cards */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2
                className="font-semibold text-[#1F2937]"
                style={{ fontSize: '18px', lineHeight: '26px' }}
              >
                Budget by Category
              </h2>
            </div>

            <div className="space-y-3">
              {categories.map((category) => {
                const categoryPercentage = category.allocated > 0
                  ? (category.spent / category.allocated) * 100
                  : 0;
                const remaining = category.allocated - category.spent;

                return (
                  <div
                    key={category.id}
                    className="bg-white rounded-[16px] p-4 border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200"
                  >
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${category.color}15` }}
                        >
                          <span className="text-xl">{category.icon}</span>
                        </div>
                        <div>
                          <h3
                            className="font-semibold text-[#1F2937]"
                            style={{ fontSize: '16px', lineHeight: '24px' }}
                          >
                            {category.name}
                          </h3>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className="text-[#6B7280]"
                          style={{ fontSize: '12px', lineHeight: '16px' }}
                        >
                          Allocated
                        </p>
                        <p
                          className="font-bold text-[#1F2937]"
                          style={{ fontSize: '14px', lineHeight: '20px' }}
                        >
                          ₹{formatIndianNumber(category.allocated)}
                        </p>
                      </div>
                    </div>

                    {/* Spent & Remaining */}
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex-1">
                        <p
                          className="text-[#6B7280] mb-0.5"
                          style={{ fontSize: '12px', lineHeight: '16px' }}
                        >
                          Spent
                        </p>
                        <p
                          className="font-semibold"
                          style={{
                            fontSize: '16px',
                            lineHeight: '24px',
                            color: category.color,
                          }}
                        >
                          ₹{formatIndianNumber(category.spent)}
                        </p>
                      </div>
                      <div className="flex-1 text-right">
                        <p
                          className="text-[#6B7280] mb-0.5"
                          style={{ fontSize: '12px', lineHeight: '16px' }}
                        >
                          Remaining
                        </p>
                        <p
                          className="font-semibold text-[#22A55A]"
                          style={{ fontSize: '16px', lineHeight: '24px' }}
                        >
                          ₹{formatIndianNumber(remaining)}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className="text-[#6B7280]"
                          style={{ fontSize: '12px', lineHeight: '16px' }}
                        >
                          {categoryPercentage.toFixed(0)}% used
                        </span>
                      </div>
                      <div className="h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.min(categoryPercentage, 100)}%`,
                            backgroundColor: category.color,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Add Expense Button */}
          <button className="w-full h-14 rounded-[16px] bg-[#F97316] text-white font-semibold hover:bg-[#FB923C] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(249,115,22,0.2)]">
            <Plus className="w-5 h-5" strokeWidth={2.5} />
            <span style={{ fontSize: '16px', lineHeight: '20px' }}>
              Add Expense
            </span>
          </button>

          {/* Recommendation Card */}
          <div className="bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] rounded-[16px] p-5 border border-[#FBBF24]/30 shadow-[0_2px_8px_rgba(251,191,36,0.1)]">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FBBF24] flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3
                  className="font-semibold text-[#1F2937] mb-2"
                  style={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  Budget Recommendation
                </h3>
                <p
                  className="text-[#6B7280]"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Based on your ceremony type, catering and decoration usually take the highest budget. Consider allocating 35-40% for catering and 20-25% for decoration.
                </p>
              </div>
            </div>
          </div>

          {/* Budget Tips */}
          <div className="bg-[#EFF6FF] rounded-[16px] p-5 border border-[#60A5FA]/20">
            <h3
              className="font-semibold text-[#1F2937] mb-3"
              style={{ fontSize: '16px', lineHeight: '24px' }}
            >
              Smart Budget Tips
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] mt-2 flex-shrink-0" />
                <p
                  className="text-[#6B7280]"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Always keep 10-15% buffer for unexpected expenses
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] mt-2 flex-shrink-0" />
                <p
                  className="text-[#6B7280]"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Compare at least 3 vendors before booking
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] mt-2 flex-shrink-0" />
                <p
                  className="text-[#6B7280]"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Book vendors early to get better rates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[428px] mx-auto">
        <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </div>
  );
}
