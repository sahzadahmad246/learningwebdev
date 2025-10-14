import React, { useState, useEffect } from "react";

const SearchSuggestion = () => {
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState(null);

  useEffect(() => {
    const dummyData = [
      { id: 1, name: "Shahzad", role: "Developer", city: "Mumbai" },
      { id: 2, name: "Ayesha", role: "Designer", city: "Delhi" },
      { id: 3, name: "Rohit", role: "Product Manager", city: "Bangalore" },
      { id: 4, name: "Sneha", role: "Tester", city: "Pune" },
      { id: 5, name: "Karan", role: "Developer", city: "Hyderabad" },
      { id: 6, name: "Tanya", role: "Designer", city: "Chennai" },
      { id: 7, name: "Vikram", role: "Developer", city: "Mumbai" },
      { id: 8, name: "Priya", role: "Tester", city: "Delhi" },
      { id: 9, name: "Manish", role: "Product Manager", city: "Kolkata" },
      { id: 10, name: "Nisha", role: "Designer", city: "Bangalore" },
    ];
    const myTimeout = setTimeout(() => {
      const result = dummyData.filter((data) => {
        return (
          data.name.toLowerCase().includes(query.toLowerCase()) ||
          data.role.toLowerCase().includes(query.toLowerCase()) ||
          data.city.toLowerCase().includes(query.toLowerCase())
        );
      });
      setSuggestion(result || null);
    }, 500);
    return () => {
      clearTimeout(myTimeout);
    };
  }, [query]);

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {suggestion && suggestion.length > 0 && (
        <div style={{ marginTop: "10px" }}>
          {suggestion.map((item) => (
            <div key={item.id}>
              <p>Name: {item.name}</p>
              <p>Role: {item.role}</p>
              <p>City: {item.city}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchSuggestion;
