import { useState } from 'react';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react';
import { InputField } from '../components/InputField';
import { PrimaryButton } from '../components/PrimaryButton';

interface CreateAccountScreenProps {
  onBack: () => void;
  onLogin: () => void;
}

export function CreateAccountScreen({ onBack, onLogin }: CreateAccountScreenProps) {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(mobile.replace(/\s/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Account created successfully');
    }
  };

  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Header */}
      <div className="h-14 flex items-center px-4 border-b border-[#F3F4F6] bg-white">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center -ml-2"
        >
          <ChevronLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pt-8 overflow-y-auto pb-6">
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">
            <span style={{ color: '#F97316' }}>Ritual</span>
            <span style={{ color: '#22A55A' }}>Sathi</span>
          </h1>
        </div>

        {/* Form */}
        <div className="max-w-md mx-auto">
          <h2
            className="font-semibold text-[#1F2937] mb-8"
            style={{ fontSize: '24px', lineHeight: '32px' }}
          >
            Create Your Account
          </h2>

          <div className="space-y-5">
            <InputField
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName) {
                  setErrors({ ...errors, fullName: '' });
                }
              }}
              error={errors.fullName}
            />

            <InputField
              label="Mobile Number"
              type="tel"
              placeholder="10-digit mobile number"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
                if (errors.mobile) {
                  setErrors({ ...errors, mobile: '' });
                }
              }}
              error={errors.mobile}
              helperText="We'll send you booking confirmations via SMS"
            />

            <InputField
              label="Email Address"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors({ ...errors, email: '' });
                }
              }}
              error={errors.email}
            />

            <div className="relative">
              <InputField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) {
                    setErrors({ ...errors, password: '' });
                  }
                }}
                error={errors.password}
                helperText="Minimum 6 characters"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[38px] text-[#6B7280] hover:text-[#1F2937]"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="relative">
              <InputField
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errors.confirmPassword) {
                    setErrors({ ...errors, confirmPassword: '' });
                  }
                }}
                error={errors.confirmPassword}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-[38px] text-[#6B7280] hover:text-[#1F2937]"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="pt-2">
              <PrimaryButton onClick={handleSubmit}>
                Create Account
              </PrimaryButton>
            </div>
          </div>

          {/* Bottom link */}
          <div className="mt-8 text-center pb-6">
            <p style={{ fontSize: '14px', lineHeight: '20px' }} className="text-[#6B7280]">
              Already have an account?{' '}
              <button
                onClick={onLogin}
                className="text-[#F97316] font-semibold hover:text-[#EA580C]"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
