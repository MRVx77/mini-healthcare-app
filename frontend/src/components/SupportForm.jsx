import { useState } from "react";

const SupportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Support request submitted successfully!");
    setFormData({
      name: "",
      age: "",
      contact: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-blue-600 text-xl">🩺</span>
        <h2 className="text-xl font-semibold text-gray-800">
          Patient Support Request
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        {/* Age & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Category */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Select Issue Category</option>
          <option value="General">General</option>
          <option value="Medical">Medical</option>
          <option value="Emergency">Emergency</option>
        </select>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Describe your issue in detail"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default SupportForm;
