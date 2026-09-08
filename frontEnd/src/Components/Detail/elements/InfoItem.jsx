
function InfoItem({ children, icon, value }) {
  return (
    <div className="mt-3 text-text-secondary flex gap-7 w-fit">
      <p className="flex gap-2 items-center">
        {icon}
        {children}
      </p>
      <p className="page-release">{value}</p>
    </div>
  );
}

export default InfoItem;
