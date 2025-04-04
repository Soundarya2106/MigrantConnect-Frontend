"use client";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styles from "../DesignFiles/LoginForm.module.css";
import { LoginIcon, PhoneIcon, PasswordIcon, HideIcon, EmailIcon, OTPIcon} from "../Components/Icons";

function LoginForm() {
  const [step, setStep] = useState("login"); // Tracks the current view
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/homepageContainer");
  }
  
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginIconWrapper}><LoginIcon /></div>
      <form className={styles.loginBox}>
        {/* Default Login Form */}
        {step === "login" && (
          <>
            <p className={styles.welcomeBack}>Welcome Back!</p>
            <h2 className={styles.loginText}>Login</h2>
            <div className={styles.inputWrapper}>
              <PhoneIcon />
              <input type="text" placeholder="Mobile number" className={styles.inputField} />
            </div>
            <div className={styles.inputWrapper}>
              <PasswordIcon />
              <input type={showPassword ? "text" : "password"} placeholder="Password" className={styles.inputField} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.hideButton}>
                <HideIcon />
              </button>
            </div>
            <button type="button" className={styles.forgotPassword} onClick={() => setStep("forgotPassword")}>
              Forgot Password?
            </button>
            <button type="submit" className={styles.loginButton} onClick={handleLogin}>Login</button>
            <p className={styles.registerText}>
              Don't have an account? <button type="button" className={styles.registerLink} onClick={() => setStep("register")}>
                Register
              </button>
            </p>
          </>
        )}

        {/* Forgot Password Step */}
        {step === "forgotPassword" && (
          <>
          <p className={styles.welcomeBack}>Welcome Back!</p>
          <h2 className={styles.loginText}>Reset Password</h2>
          <div className={styles.inputWrapper}>
              <PhoneIcon />
              <input type="text" placeholder="Mobile number" className={styles.inputField} />
          </div>
            <button className={styles.loginButton} onClick={() => setStep("otpVerification")}>Send OTP</button>
            <button type="button" className={styles.forgotPassword} onClick={() => setStep("resetViaEmail")}>
              Reset Via Email?
            </button>
          </>
        )}

        {/* Reset via Email */}
        {step === "resetViaEmail" && (
          <>
            <p className={styles.welcomeBack}>Welcome Back!</p>
            <h2 className={styles.loginText}>Reset Password</h2>
            <div className={styles.inputWrapper}>
              <EmailIcon />
              <input type="text" placeholder="Email" className={styles.inputField} />
          </div>
          <button className={styles.loginButton} onClick={() => setStep("otpVerification")}>Send OTP</button>
          <button type="button" className={styles.forgotPassword} onClick={() => setStep("forgotPassword")}>
              Reset Via Mobile Number?
            </button>
          </>
        )}

        {/* OTP Verification */}
        {step === "otpVerification" && (
          <>
            <p className={styles.welcomeBack}>Welcome Back!</p>
            <h2 className={styles.loginText}>Reset Password</h2>
            <div className={styles.inputWrapper}>
              <OTPIcon />
              <input type="text" placeholder="Enter OTP" className={styles.inputField} />
          </div>
          <button className={styles.loginButton} onClick={() => setStep("newPassword")}>Verify OTP</button>
          <button type="button" className={styles.forgotPassword} onClick={() => setStep("forgotPassword")}>
              Resend OTP?
            </button>
          </>
        )}

        {/* New Password Setup */}
        {step === "newPassword" && (
          <>
            <p className={styles.welcomeBack}>Welcome Back!</p>
            <h2 className={styles.loginText}>Reset Password</h2>
            <div className={styles.inputWrapper}>
              <PasswordIcon />
              <input type={showPassword ? "text" : "password"} placeholder="Create new password" className={styles.inputField} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.hideButton}>
                <HideIcon />
              </button>
            </div>
            <div className={styles.inputWrapper}>
              <PasswordIcon />
              <input type={showPassword ? "text" : "password"} placeholder="Confirm new password" className={styles.inputField} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.hideButton}>
                <HideIcon />
              </button>
            </div>
            <button className={styles.loginButton} onClick={() => setStep("passwordChanged")}>Save</button>
          </>
        )}

        {/* Password Changed Successfully */}
        {step === "passwordChanged" && (
          <>
            <p className={styles.welcomeBack}>Welcome Back!</p>
            <h2 className={`${styles.loginText} ${styles.successMessage}`}>Password Changed Successfully.</h2>
            <button className={styles.loginButton} onClick={() => setStep("login")}>Login</button>
          </>
        )}

        {/* Register Step 1: Phone Number */}
        {step === "register" && (
          <>
            <p className={styles.welcomeBack}>Join Migrant<span>Connect</span>!</p>
            <h2 className={styles.loginText}>Register</h2>
            <div className={styles.inputWrapper}>
              <PhoneIcon />
              <input type="text" placeholder="Mobile number" className={styles.inputField} />
            </div>
            <button className={styles.loginButton} onClick={() => setStep("registerOtp")}>Send OTP</button>
          </>
        )}

        {/* Register Step 2: OTP Verification */}
        {step === "registerOtp" && (
          <>
            <p className={styles.welcomeBack}>Join Migrant<span>Connect</span>!</p>
            <h2 className={styles.loginText}>Register</h2>
            <div className={styles.inputWrapper}>
              <OTPIcon />
              <input type="text" placeholder="Enter OTP" className={styles.inputField} />
            </div>
            <button className={styles.loginButton} onClick={() => setStep("createPassword")}>Verify</button>
            <button className={styles.forgotPassword} onClick={() => setStep("register")}>Resend OTP?</button>
          </>
        )}

        {/* Register Step 3: Set Password */}
        {step === "createPassword" && (
          <>
            <p className={styles.welcomeBack}>Join Migrant<span>Connect</span>!</p>
            <h2 className={styles.loginText}>Register</h2>
            <div className={styles.inputWrapper}>
              <PasswordIcon />
              <input type={showPassword ? "text" : "password"} placeholder="Create new password" className={styles.inputField} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.hideButton}>
                <HideIcon />
              </button>
            </div>
            <div className={styles.inputWrapper}>
              <PasswordIcon />
              <input type={showPassword ? "text" : "password"} placeholder="Confirm new password" className={styles.inputField} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.hideButton}>
                <HideIcon />
              </button>
            </div>
            <button className={styles.loginButton} onClick={() => setStep("accountCreated")}>Proceed</button>
          </>
        )}

        {/* Account Created Successfully */}
        {step === "accountCreated" && (
          <>
            <p className={styles.welcomeBack}>Join Migrant<span>Connect</span>!</p>
            <h2 className={`${styles.loginText} ${styles.successMessage}`}>Account Created Successfully!</h2>
            <button className={styles.loginButton} onClick={() => setStep("login")}>Login</button>
          </>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
