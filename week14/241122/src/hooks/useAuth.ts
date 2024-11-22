import { LoginProps } from "@/pages/Login";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import { login, resetPassword, resetRequest, signup } from "@/api/auth.api";
import { SignupProps } from "@/pages/Signup";
import { ResetPasswordProps } from "@/pages/ResetPassword";
import { useState } from "react";

export const useAuth = () => {
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const { storeLogin, storeLogout, isLoggedIn } = useAuthStore();

  const [resetRequested, setResetRequested] = useState(false);

  const userLogin = (data: LoginProps) => {
    login(data).then(
      (res) => {
        storeLogin(res.token);

        showAlert("로그인이 완료되었습니다.");
        navigate("/");
      },
      (_) => {
        showAlert("로그인이 실패했습니다.");
      }
    );
  };

  const userSignup = (data: SignupProps) => {
    signup(data).then(() => {
      // 성공
      showAlert("회원가입이 완료되었습니다.");
      navigate("/login");
    });
  };

  const userResetPassword = (data: ResetPasswordProps) => {
    resetPassword(data).then(() => {
      showAlert("비밀번호가 초기화되었습니다.");
      navigate("/login");
    });
  };

  const userResetRequest = (data: ResetPasswordProps) => {
    resetRequest(data).then(() => {
      setResetRequested(true);
    });
  };

  return {
    userLogin,
    userSignup,
    userResetPassword,
    userResetRequest,
    resetRequested,
  };
};
