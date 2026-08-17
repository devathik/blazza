import { CheckCircle } from "lucide-react";

interface AlreadyLoggedInCardProps {
  onGoToDashboard: () => void;
  onLogout: () => void;
}

export const AlreadyLoggedInCard: React.FC<AlreadyLoggedInCardProps> = ({
  onGoToDashboard,
  onLogout,
}) => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] animate-fade-in items-center justify-center bg-zinc-50 px-4 py-10 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 sm:p-6">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-3xl sm:p-8">
        <div className="flex flex-col items-center space-y-2">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-500">
            Dokan Khuji
          </p>
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 dark:bg-emerald-950/30">
            <CheckCircle className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-extrabold">আপনি ইতিমধ্যে লগইন করেছেন!</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            আপনার সেশন এখনো সক্রিয় আছে।
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <button onClick={onGoToDashboard} type="button" className="w-full cursor-pointer rounded-full bg-sky-500 px-4 py-3.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-sky-600">
            ড্যাশবোর্ডে যান
          </button>
          <button onClick={onLogout} type="button" className="w-full cursor-pointer rounded-full border border-zinc-200 bg-zinc-100 px-4 py-3.5 text-xs font-bold text-zinc-700 transition-colors hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
            লগআউট করুন
          </button>
        </div>
      </div>
    </div>
  );
};
