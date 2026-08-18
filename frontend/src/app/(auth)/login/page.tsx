"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { config } from "@/config";
import { AlreadyLoggedInCard } from "@/modules/auth/components/AlreadyLoggedInCard";
import { loginWithGoogleApi } from "@/modules/auth/services/auth.api";

type GoogleWindow = typeof window & {
  googleIdInitialized?: boolean;
  google?: {
    accounts?: {
      id?: {
        initialize: (options: {
          client_id: string;
          callback: (response: { credential?: string }) => Promise<void> | void;
        }) => void;
        renderButton: (
          element: HTMLDivElement,
          options: {
            theme: string;
            size: string;
            text: string;
            shape: string;
            width: number;
          },
        ) => void;
      };
    };
  };
};

type ApiError = {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
};

export default function LoginPage() {
  const router = useRouter();
  const googleButtonRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window === "undefined") return false;
    return Boolean(localStorage.getItem("accessToken"));
  });
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!config.googleClientId || isLoggedIn) return;

    const initializeGoogleSignIn = () => {
      const google = (window as GoogleWindow).google;
      if (!google?.accounts?.id || !googleButtonRef.current) return;

      if (!(window as GoogleWindow).googleIdInitialized) {
        google.accounts.id.initialize({
          client_id: config.googleClientId,
          callback: async (response) => {
            if (!response?.credential) return;

            setIsLoading(true);
            setErrorMsg("");

            try {
              const authResponse = await loginWithGoogleApi(response.credential);
              const payload = authResponse?.data ?? authResponse;
              const accessToken = payload?.accessToken ?? payload?.token ?? payload?.jwt;
              const refreshToken = payload?.refreshToken ?? payload?.refresh_token;

              if (accessToken) localStorage.setItem("accessToken", accessToken);
              if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
              router.replace("/profile");
            } catch (error: unknown) {
              const apiError = error as ApiError;
              console.error("Google login failed", error);
              setErrorMsg(
                apiError.response?.data?.message ||
                apiError.message ||
                "সার্ভারের সাথে সংযোগ করা যাচ্ছে না। অনুগ্রহ করে কিছুক্ষণ পরে আবার চেষ্টা করুন।",
              );
            } finally {
              setIsLoading(false);
            }
          },
        });
        (window as GoogleWindow).googleIdInitialized = true;
      }

      google.accounts.id.renderButton(googleButtonRef.current, {
        theme: "outline",
        size: "large",
        text: "signin_with",
        shape: "pill",
        width: Math.min(320, googleButtonRef.current.clientWidth || 280),
      });
    };

    const existingScript = document.querySelector("script[src='https://accounts.google.com/gsi/client']");
    if (existingScript) {
      existingScript.addEventListener("load", initializeGoogleSignIn);
      initializeGoogleSignIn();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = initializeGoogleSignIn;
    document.body.appendChild(script);
  }, [router, isLoggedIn]);

  if (isLoggedIn) {
    return (
      <AlreadyLoggedInCard
        onGoToDashboard={() => router.replace("/profile")}
        onLogout={() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          setIsLoggedIn(false);
          router.replace("/");
        }}
      />
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-zinc-50 px-4 py-10 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 sm:p-6">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-3xl sm:p-8">
        <div className="space-y-2 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-500">Dokan Khuji</p>
          <h1 className="text-3xl font-extrabold">সাইন ইন করুন</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            আপনার Google অ্যাকাউন্ট দিয়ে নিরাপদে লগইন করুন।
          </p>
        </div>

        {errorMsg && (
          <div className="mt-4 flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50 p-4 text-xs text-red-600 dark:border-red-900/50 dark:bg-red-950/20 dark:text-red-400">
            <span className="mt-0.5 shrink-0 font-bold">!</span>
            <div>
              <span className="mb-0.5 block font-bold">লগইন ত্রুটি:</span>
              {errorMsg}
            </div>
          </div>
        )}

        <div className="mt-8 flex w-full flex-col items-center gap-4 overflow-hidden">
          {isLoading ? (
            <div className="flex max-w-full flex-wrap items-center justify-center gap-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-200 border-t-sky-500" />
              আপনার লগইন প্রক্রিয়া চলছে...
            </div>
          ) : (
            <div ref={googleButtonRef} className="flex min-h-11 w-full max-w-80 justify-center overflow-hidden" />
          )}
        </div>
      </div>
    </div>
  );
}
