function Footer() {
  return (
    <footer className="mt-auto border-t border-indigo-100 bg-white px-6 py-6 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-200 font-bold text-indigo-800 shadow-sm">
            AG
          </div>
          <div>
            <p className="text-sm font-bold text-indigo-900">Anushri Golwalkar</p>
            <p className="text-xs text-indigo-600">React Enthusiast</p>
          </div>
        </div>
        <div>
          <p className="text-center text-[10px] font-medium uppercase tracking-wider text-indigo-500 sm:text-right">
            Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
