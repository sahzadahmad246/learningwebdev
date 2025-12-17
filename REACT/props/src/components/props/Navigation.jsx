function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "children", label: "Children Props", icon: "🧒" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Toggler", icon: "🎚️" },
  ];

  return (
    <nav className="sticky flex justify-center top-0 z-50 shadow-md">
      <div className="flex">
        {sections.map((section) => (
          <button
            key={section.id}
            className="bg-blue-500 p-2 my-3 mx-2 text-white rounded-lg hover:bg-blue-900"
          >
            <span className="mr-1">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
