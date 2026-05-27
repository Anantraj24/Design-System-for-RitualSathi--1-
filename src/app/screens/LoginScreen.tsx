import { useState } from 'react';
import { ChevronLeft, AlertCircle } from 'lucide-react';
import { InputField } from '../components/InputField';
import { PrimaryButton } from '../components/PrimaryButton';

interface LoginScreenProps {
  onBack: () => void;
  onCreateAccount: () => void;
  onLogin: () => void;
}

// Valid credentials
const VALID_EMAIL = 'abc@gmail.com';
const VALID_PASSWORD = 'abc@123';

export function LoginScreen({ onBack, onCreateAccount, onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate credentials
    if (email.trim() === VALID_EMAIL && password === VALID_PASSWORD) {
      // Store authentication in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      onLogin();
    } else {
      setError('Invalid email or password. Please try again.');
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
      <div className="flex-1 px-6 pt-8 overflow-y-auto">
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
            Welcome Back
          </h2>

          {/* Error Message */}
          {error && (
            <div className="mb-5 p-4 bg-[#FEF2F2] border border-[#F87171] rounded-[12px] flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#F87171] flex-shrink-0 mt-0.5" />
              <div>
                <p
                  className="text-[#991B1B] font-medium mb-1"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Login Failed
                </p>
                <p
                  className="text-[#DC2626]"
                  style={{ fontSize: '13px', lineHeight: '18px' }}
                >
                  {error}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex justify-end">
              <button
                type="button"
                className="text-[#F97316] font-medium hover:text-[#EA580C]"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                Forgot Password?
              </button>
            </div>

            <PrimaryButton type="submit">
              Login
            </PrimaryButton>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#E5E7EB]"></div>
            <span
              className="text-[#6B7280]"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              or
            </span>
            <div className="flex-1 h-px bg-[#E5E7EB]"></div>
          </div>

          <button
            className="w-full h-12 px-6 rounded-[10px] font-semibold bg-white text-[#1F2937] border-2 border-[#E5E7EB] hover:bg-[#F3F4F6] transition-all duration-200"
            style={{ fontSize: '16px', lineHeight: '20px' }}
          >
            Continue with OTP
          </button>

          {/* Bottom link */}
          <div className="mt-8 text-center">
            <p style={{ fontSize: '14px', lineHeight: '20px' }} className="text-[#6B7280]">
              New to RitualSathi?{' '}
              <button
                onClick={onCreateAccount}
                className="text-[#F97316] font-semibold hover:text-[#EA580C]"
              >
                Create Account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
