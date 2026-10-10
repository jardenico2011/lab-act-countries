import { Outlet, useLocation } from "react-router";

const CountriesLayout = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  const code = segments.length > 1 ? segments[1] : null;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="breadcrumbs text-sm mb-4">
        <ul>
          <li>Countries</li>
          {code && <li>{code.toUpperCase()}</li>}
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default CountriesLayout;