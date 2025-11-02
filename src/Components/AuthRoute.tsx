import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import type { RootState } from "../redux/store";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute = ({ children }: AuthRouteProps) => {
  const location = useLocation();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);

  const guestOnlyPaths = ["/auth/login", "/auth/register" , "/auth/forgetpass"];

  const publicPaths = ["/faq", "/aboutus", "/blog" ,"/contactus", "/"];

  if (guestOnlyPaths.includes(location.pathname)) {
    if (isLogin) {
      return <Navigate to="/" replace />;
    }
    return <>{children}</>;
  }

  if (publicPaths.includes(location.pathname)) {
    return <>{children}</>;
  }

  if (!isLogin) {
    return <Navigate to="/auth/login" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
};

export default AuthRoute;
