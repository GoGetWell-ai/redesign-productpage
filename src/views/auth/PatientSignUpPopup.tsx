import React, { useState } from 'react';

type PatientSignUpPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  hcfLogin?: boolean;
  popupButtonStatus?: boolean;
  buttonChildren?: React.ReactNode;
};

const PatientSignUpPopup: React.FC<PatientSignUpPopupProps> = ({
  isOpen,
  onClose,
  hcfLogin = false,
  popupButtonStatus = false,
  buttonChildren,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  if (!isOpen) return buttonChildren ? <>{buttonChildren}</> : null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your signup logic here
    alert(`Signing up: ${formData.name}, ${formData.email}`);
    onClose();
  };

  return (
    <>
      {/* Render the buttonChildren, e.g. a button to open the popup */}
      {buttonChildren}

      {/* Popup modal */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 999,
        }}
        onClick={onClose}
      >
        <div
          style={{
            backgroundColor: '#fff',
            padding: 24,
            borderRadius: 8,
            width: 320,
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}
          onClick={e => e.stopPropagation()}
        >
          <h2>
            Patient Sign Up {hcfLogin ? '(HCF Login)' : ''}
          </h2>

          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                required
                style={{ width: '100%', marginBottom: 12 }}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                style={{ width: '100%', marginBottom: 12 }}
              />
            </label>
            <label>
              Password
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                required
                style={{ width: '100%', marginBottom: 12 }}
              />
            </label>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '8px 0',
                backgroundColor: popupButtonStatus ? '#2563EB' : '#888',
                color: 'white',
                border: 'none',
                borderRadius: 4,
                cursor: popupButtonStatus ? 'pointer' : 'not-allowed',
                opacity: popupButtonStatus ? 1 : 0.6,
              }}
              disabled={!popupButtonStatus}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PatientSignUpPopup;
