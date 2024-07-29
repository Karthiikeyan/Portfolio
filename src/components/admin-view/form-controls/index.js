"use client";

export default function FormControls({
  controls,
  formData,
  setFormData,
  handleSaveData,
  destination
}) {
  return (
    <div
      className={`max-w-md p-6 mx-auto bg-white rounded ${
        destination === "login" ? "" : "shadow-md"
      }`}
    >
      {controls.map((controlItem) => (
        <div key={controlItem.name}>
          <label className="block text-sm font-medium text-gray-700">
            {controlItem.label}
          </label>
          <input
            placeholder={controlItem.placeholder}
            type={controlItem.type}
            name={controlItem.name}
            id={controlItem.name}
            value={formData[controlItem.name]}
            onChange={(e) => {
              setFormData({
                ...formData,
                [controlItem.name]: e.target.value,
              });
            }}
            className="w-full px-3 py-2 mt-1 mb-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      ))}
      <button
        onClick={() => handleSaveData(destination)}
        className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        {destination === "login" ? "Login" : "Add Info"}
      </button>
    </div>
  );
}
