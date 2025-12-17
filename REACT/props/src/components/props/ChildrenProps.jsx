import React from "react";

const Card = ({ children, title, color = "blue" }) => {
  const colorClases = {
    blue: "border-blue-600 bg-blue-200",
    green: "border-green-600 bg-green-200",
    red: "border-red-600 bg-red-200",
    purple: "border-purple-600 bg-purple-200",
  };
  return (
    <div
      className={`border-l-4 rounded-lg p-6 shadow-md ${colorClases[color]}`}
    >
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

const Container = ({ children, layout = "vertical" }) => {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap4-4",
    grid: "grid gird-clos-1 md:grid-cols-2 gap-4",
  };

  return <div className={` gap-4 ${layoutClasses[layout]}`}>{children}</div>;
};
const ChildrenProps = () => {
  return (
    <div className="p-4 text-white">
      <Container layout="grid">
        <Card title="User Profile" color="blue">
          <p className="text-sm text-gray-700">
            <strong className="font-semibold text-gray-900">Name:</strong>{" "}
            Shahzad Ahmad
          </p>

          <p className="text-sm text-gray-700 mt-1">
            <strong className="font-semibold text-gray-900">Email:</strong>{" "}
            shaz@gmail.com
          </p>

          <p className="text-sm text-gray-700 mt-1">
            <strong className="font-semibold text-gray-900">Role:</strong>{" "}
            Unemployed
          </p>
        </Card>
        <Card title="Project Details" color="green">
          <p className="text-sm text-gray-700">
            <strong className="font-semibold text-gray-900">Project:</strong>{" "}
            Nova UI
          </p>

          <p className="text-sm text-gray-700 mt-1">
            <strong className="font-semibold text-gray-900">Status:</strong> In
            Progress
          </p>

          <p className="text-sm text-gray-700 mt-1">
            <strong className="font-semibold text-gray-900">Deadline:</strong>{" "}
            12 Jan 2026
          </p>
        </Card>

        <Card title="Billing Info" color="purple">
          <p className="text-sm text-gray-700">
            <strong className="font-semibold text-gray-900">Plan:</strong> Pro
            Annual
          </p>

          <p className="text-sm text-gray-700 mt-1">
            <strong className="font-semibold text-gray-900">Amount:</strong>{" "}
            $199
          </p>

          <p className="text-sm text-gray-700 mt-1">
            <strong className="font-semibold text-gray-900">
              Next Billing:
            </strong>{" "}
            05 Feb 2026
          </p>
        </Card>

        <Card title="System Info" color="red">
          <p className="text-sm text-gray-700">
            <strong className="font-semibold text-gray-900">Device:</strong>{" "}
            MacBook Air M3
          </p>

          <p className="text-sm text-gray-700 mt-1">
            <strong className="font-semibold text-gray-900">OS:</strong> macOS
            Sequoia
          </p>

          <p className="text-sm text-gray-700 mt-1">
            <strong className="font-semibold text-gray-900">Status:</strong>{" "}
            Running Smooth
          </p>
        </Card>
      </Container>
    </div>
  );
};

export default ChildrenProps;
