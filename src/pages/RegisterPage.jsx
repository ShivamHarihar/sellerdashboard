import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1 - Account Creation
        mobile: '',
        otp: ['', '', '', '', '', ''],
        fullName: '',
        password: '',
        confirmPassword: '',
        // Step 2 - Pickup Address
        pinCode: '',
        pickupAddress: '',
        landmark: '',
        city: '',
        state: '',
        // Step 3 - Business Details
        gstNumber: '',
        businessName: '',
        panNumber: '',
        businessType: '',
        businessAddress: '',
        certificate: null,
        signature: null,
        // Step 4 - Bank Details
        accountHolderName: '',
        accountNumber: '',
        ifscCode: '',
        bankName: '',
        branch: '',
        bankCity: '',
        bankState: '',
        cancelledCheque: null
    });

    const steps = [
        { number: 1, label: 'Step 1', title: 'Create Account' },
        { number: 2, label: 'Step 2', title: 'Pickup Address' },
        { number: 3, label: 'Step 3', title: 'Business Details' },
        { number: 4, label: 'Step 4', title: 'Bank Details' }
    ];

    const step2Requirements = [
        'A Pincode and pickup address where the pickup has been set up and ready.',
        'Once you add your pickup address, you can edit the pickup address from the seller panel.',
        'You can add multiple pickup addresses from the seller panel.',
        'If you have entered your pickup incorrectly, your items may not be picked up by our courier and your pickup can not get set up. So enter your pickup carefully.'
    ];

    const step3Requirements = [
        'Upload the panel documents correctly, if entered incorrectly your panel verification will be rejected.',
        'Enter the bank account details of the same name as the documents which we ask at the time of verification.',
        'At the time of listing the products, you will have to upload the approval from Nerozon and then you can list the business immediately.',
        'Enter this information correctly so that your seller account can be opened quickly and you can start your business immediately.'
    ];

    const step4Requirements = [
        'Upload the panel documents correctly, if entered incorrectly your panel verification will be rejected.',
        'Enter the bank account details of the same name as the documents which we ask at the time of verification.',
        'At the time of listing the products, you will have to upload the approval from Nerozon and then you can list the business immediately.',
        'Enter this information correctly so that your seller account can be opened quickly and you can start your business immediately.'
    ];

    const requirements = [
        {
            icon: '📱',
            title: 'GST Number',
            description: 'Government-issued tax ID required for sellers to comply with tax regulations and facilitate tax collection.'
        },
        {
            icon: '💳',
            title: 'PAN Card',
            description: 'Permanent Account Number card required for identity verification and tax purposes.'
        },
        {
            icon: '🏪',
            title: 'Product to Sell',
            description: 'Items or services you plan to offer on the platform, which must comply with Nerozon\'s policies.'
        }
    ];

    const handleOtpChange = (index, value) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtp = [...formData.otp];
            newOtp[index] = value;
            setFormData({ ...formData, otp: newOtp });

            if (value && index < 5) {
                document.getElementById(`otp-${index + 1}`)?.focus();
            }
        }
    };

    const handleFileChange = (field, file) => {
        setFormData({ ...formData, [field]: file });
    };

    const handleStep1Submit = (e) => {
        e.preventDefault();
        setCurrentStep(2);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleStep2Submit = (e) => {
        e.preventDefault();
        setCurrentStep(3);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleStep3Submit = (e) => {
        e.preventDefault();
        setCurrentStep(4);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleStep4Submit = (e) => {
        e.preventDefault();
        console.log('Registration Complete!', formData);
        alert('Registration Completed Successfully!');
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const getStepTitle = () => {
        switch (currentStep) {
            case 1: return 'Create Your Account';
            case 2: return 'Give Your Pickup Address';
            case 3: return 'Give Business Details';
            case 4: return 'Give Bank Details';
            default: return 'Create Your Account';
        }
    };

    const getRequirementTitle = () => {
        switch (currentStep) {
            case 1: return 'You need below details to set up Nerozon';
            case 2: return <>Share Your <span className="text-orange">Location</span></>;
            case 3: return <>Why need <span className="text-orange">GST?</span></>;
            case 4: return <>Why need <span className="text-orange">Bank Details?</span></>;
            default: return 'You need below details to set up Nerozon';
        }
    };

    const getCurrentRequirements = () => {
        switch (currentStep) {
            case 2: return step2Requirements;
            case 3: return step3Requirements;
            case 4: return step4Requirements;
            default: return null;
        }
    };

    return (
        <div className="register-page">
            {/* Header */}
            <header className="register-header">
                <div className="container">
                    <Link to="/" className="logo">
                        <div className="logo-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#7ED321" />
                                <path d="M2 17L12 22L22 17" stroke="#7ED321" strokeWidth="2" />
                                <path d="M2 12L12 17L22 12" stroke="#7ED321" strokeWidth="2" />
                            </svg>
                        </div>
                        <span className="logo-text">Nerozon</span>
                    </Link>
                </div>
            </header>

            <div className="register-content">
                <div className="container-wide">
                    <div className="register-layout">
                        {/* Left Sidebar */}
                        <div className="register-sidebar">
                            <h2>{getStepTitle()}</h2>

                            {/* Progress Steps */}
                            <div className="progress-steps">
                                {steps.map((step, index) => (
                                    <div key={step.number} className="progress-step-wrapper">
                                        <div className={`progress-step ${currentStep >= step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}>
                                            <div className="step-circle">
                                                {currentStep > step.number ? '✓' : step.number}
                                            </div>
                                            <span className="step-label">{step.label}</span>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className={`step-connector ${currentStep > step.number ? 'active' : ''}`}></div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Requirements */}
                            <div className="requirements-section">
                                {currentStep === 1 ? (
                                    <>
                                        <h3>{getRequirementTitle()}</h3>
                                        <div className="requirements-list">
                                            {requirements.map((req, index) => (
                                                <div key={index} className="requirement-item">
                                                    <div className="req-icon">{req.icon}</div>
                                                    <div className="req-content">
                                                        <h4>{req.title}</h4>
                                                        <p>{req.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h3>{getRequirementTitle()}</h3>
                                        <div className="step2-requirements-list">
                                            {getCurrentRequirements()?.map((req, index) => (
                                                <div key={index} className="step2-requirement-item">
                                                    <span className="bullet-number">{index + 1}.</span>
                                                    <p>{req}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="register-form-container">
                            <div className="register-form-card">
                                <h3>{getStepTitle()}</h3>

                                {/* Step 1 - Account Creation */}
                                {currentStep === 1 && (
                                    <form onSubmit={handleStep1Submit} className="register-form">
                                        <div className="form-group">
                                            <label>Mobile Number</label>
                                            <div className="phone-input-group">
                                                <span className="country-code">+91</span>
                                                <div className="input-divider"></div>
                                                <input
                                                    type="tel"
                                                    placeholder="Enter Mobile Number"
                                                    value={formData.mobile}
                                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                                    required
                                                />
                                                <button type="button" className="send-otp-btn">Send OTP</button>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>OTP</label>
                                            <div className="otp-inputs">
                                                {formData.otp.map((digit, index) => (
                                                    <input
                                                        key={index}
                                                        id={`otp-${index}`}
                                                        type="text"
                                                        maxLength="1"
                                                        value={digit}
                                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                                        className="otp-input"
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter Full Name"
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                placeholder="Enter Password"
                                                value={formData.password}
                                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <input
                                                type="password"
                                                placeholder="Enter Password"
                                                value={formData.confirmPassword}
                                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <p className="terms-text">
                                            By clicking the button, I agree to <Link to="/terms">Terms of Use</Link>
                                        </p>

                                        <button type="submit" className="btn btn-primary btn-block">
                                            Submit
                                        </button>

                                        <p className="login-link">
                                            Already a User? <Link to="/login">Login</Link>
                                        </p>
                                    </form>
                                )}

                                {/* Step 2 - Pickup Address */}
                                {currentStep === 2 && (
                                    <form onSubmit={handleStep2Submit} className="register-form">
                                        <div className="form-group">
                                            <label>PIN Code</label>
                                            <div className="pin-input-group">
                                                <input
                                                    type="text"
                                                    placeholder="Enter PIN Code"
                                                    value={formData.pinCode}
                                                    onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                                                    maxLength="6"
                                                    required
                                                />
                                                <button type="button" className="verify-btn">Verify</button>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Pickup Address</label>
                                            <textarea
                                                placeholder="Enter Address"
                                                value={formData.pickupAddress}
                                                onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                                                rows="3"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Landmark Address</label>
                                            <input
                                                type="text"
                                                placeholder="Enter Landmark"
                                                value={formData.landmark}
                                                onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                                            />
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter City"
                                                    value={formData.city}
                                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>State</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter State"
                                                    value={formData.state}
                                                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="button-group">
                                            <button type="button" className="btn btn-secondary" onClick={handleBack}>
                                                Back
                                            </button>
                                            <button type="submit" className="btn btn-primary">
                                                Continue
                                            </button>
                                        </div>
                                    </form>
                                )}

                                {/* Step 3 - Business Details */}
                                {currentStep === 3 && (
                                    <form onSubmit={handleStep3Submit} className="register-form">
                                        <div className="form-group">
                                            <label>GST Number</label>
                                            <div className="pin-input-group">
                                                <input
                                                    type="text"
                                                    placeholder="22AAACH9692H2ZK"
                                                    value={formData.gstNumber}
                                                    onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                                                    required
                                                />
                                                <button type="button" className="verify-btn">Verify</button>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Business Name</label>
                                            <input
                                                type="text"
                                                placeholder="Business Name"
                                                value={formData.businessName}
                                                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>PAN Number</label>
                                            <input
                                                type="text"
                                                placeholder="ESBPM0504G"
                                                value={formData.panNumber}
                                                onChange={(e) => setFormData({ ...formData, panNumber: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Business Type</label>
                                            <input
                                                type="text"
                                                placeholder="Sale Food Products"
                                                value={formData.businessType}
                                                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Business Address</label>
                                            <textarea
                                                placeholder="Manchur pune maharashtra main road pune 410501"
                                                value={formData.businessAddress}
                                                onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
                                                rows="3"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Upload Certificate</label>
                                            <div className="file-upload-area">
                                                <input
                                                    type="file"
                                                    id="certificate"
                                                    accept=".pdf,.jpg,.png"
                                                    onChange={(e) => handleFileChange('certificate', e.target.files[0])}
                                                    style={{ display: 'none' }}
                                                />
                                                <label htmlFor="certificate" className="file-upload-label">
                                                    <span className="upload-icon">📄</span>
                                                    <span>{formData.certificate ? formData.certificate.name : 'Certificate Pdf File'}</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Signature</label>
                                            <div className="file-upload-area">
                                                <input
                                                    type="file"
                                                    id="signature"
                                                    accept="image/*"
                                                    onChange={(e) => handleFileChange('signature', e.target.files[0])}
                                                    style={{ display: 'none' }}
                                                />
                                                <label htmlFor="signature" className="file-upload-label">
                                                    <span className="upload-icon">✍️</span>
                                                    <span>{formData.signature ? formData.signature.name : 'Drag here or Click To Browse a file'}</span>
                                                    <span className="file-size-hint">Maximum file size 5 mb</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="button-group">
                                            <button type="button" className="btn btn-secondary" onClick={handleBack}>
                                                Back
                                            </button>
                                            <button type="submit" className="btn btn-primary">
                                                Continue
                                            </button>
                                        </div>
                                    </form>
                                )}

                                {/* Step 4 - Bank Details */}
                                {currentStep === 4 && (
                                    <form onSubmit={handleStep4Submit} className="register-form">
                                        <div className="form-group">
                                            <label>Account Holder Name</label>
                                            <input
                                                type="text"
                                                placeholder="Account Holder Name"
                                                value={formData.accountHolderName}
                                                onChange={(e) => setFormData({ ...formData, accountHolderName: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Account Number</label>
                                            <input
                                                type="text"
                                                placeholder="Account Number"
                                                value={formData.accountNumber}
                                                onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>IFSC Code</label>
                                            <input
                                                type="text"
                                                placeholder="HDFC000123"
                                                value={formData.ifscCode}
                                                onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Bank Name</label>
                                            <input
                                                type="text"
                                                placeholder="HDFC Baank"
                                                value={formData.bankName}
                                                onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Branch</label>
                                            <input
                                                type="text"
                                                placeholder="Kothrud"
                                                value={formData.branch}
                                                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input
                                                    type="text"
                                                    placeholder="Pune"
                                                    value={formData.bankCity}
                                                    onChange={(e) => setFormData({ ...formData, bankCity: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>State</label>
                                                <input
                                                    type="text"
                                                    placeholder="Maharashtra"
                                                    value={formData.bankState}
                                                    onChange={(e) => setFormData({ ...formData, bankState: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Cancelled Cheque</label>
                                            <div className="file-upload-area">
                                                <input
                                                    type="file"
                                                    id="cancelledCheque"
                                                    accept="image/*,.pdf"
                                                    onChange={(e) => handleFileChange('cancelledCheque', e.target.files[0])}
                                                    style={{ display: 'none' }}
                                                />
                                                <label htmlFor="cancelledCheque" className="file-upload-label">
                                                    <span className="upload-icon">📄</span>
                                                    <span>{formData.cancelledCheque ? formData.cancelledCheque.name : 'Drag here or Click To Browse a file'}</span>
                                                    <span className="file-size-hint">Maximum file size 5 mb</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="button-group">
                                            <button type="button" className="btn btn-secondary" onClick={handleBack}>
                                                Back
                                            </button>
                                            <button type="submit" className="btn btn-primary">
                                                Continue
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seller Support Section */}
            {currentStep >= 2 && (
                <section className="seller-support-section">
                    <div className="container">
                        <div className="support-card-inline">
                            <div className="support-icon-inline">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                                    <circle cx="32" cy="32" r="30" stroke="#FF8C00" strokeWidth="2" />
                                    <path d="M32 16C23.163 16 16 23.163 16 32C16 35.866 17.568 39.366 20.134 42" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M32 16C40.837 16 48 23.163 48 32C48 35.866 46.432 39.366 43.866 42" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" />
                                    <circle cx="32" cy="32" r="4" fill="#FF8C00" />
                                    <path d="M20 44C20 44 22 46 24 46C26 46 28 44 28 44" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M36 44C36 44 38 46 40 46C42 46 44 44 44 44" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="support-content-inline">
                                <h4>Seller Support</h4>
                                <p>If you need some help in registering,<br />you can contact our helpline, we will assist you.</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className="register-footer">
                <div className="container-wide">
                    <div className="footer-content">
                        <div className="footer-column">
                            <h4>About</h4>
                            <ul>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/sell">Sell On Nerozon</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Policy</h4>
                            <ul>
                                <li><Link to="/return-policy">Return Policy</Link></li>
                                <li><Link to="/privacy">Privacy</Link></li>
                                <li><Link to="/terms">Terms of Use</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Social</h4>
                            <ul>
                                <li><a href="#facebook">Facebook</a></li>
                                <li><a href="#twitter">Twitter</a></li>
                                <li><a href="#instagram">Instagram</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Register Office</h4>
                            <p className="footer-address">
                                Nerozon Online Services<br />
                                Mandi Temple, Boisar(W) Samrath Buildings<br />
                                Manohar, Maharashtra, 400075
                            </p>
                            <p className="footer-phone">Telephone: 1800 123 95800</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>Copyright © 2018 Nerozon. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RegisterPage;
