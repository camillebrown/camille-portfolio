import FooterNav from './FooterNav';

export default function Container({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
      <FooterNav />
    </div>
  );
}
