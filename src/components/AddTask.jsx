import React from "react";

const AddTask = ({form, handleAddExpense, handleInputChange}) => {
  return (
    <div>
      
        <div
          className="p-3 mb-4"
          style={{ border: "1px solid #ccc", borderRadius: "5px" }}
        >
          <h1 className="mb-3">Add Expense</h1>
          <form onSubmit={handleAddExpense}>
            <div className="row g-3">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your expense details below"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter expense description"
                  name="description"
                  value={form.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter expense category"
                  name="category"
                  value={form.category}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  name="amount"
                  value={form.amount}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={form.date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-dark w-100">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

    </div>
  );
};

export default AddTask;
