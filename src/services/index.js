import { toast, ToastContainer } from "react-toastify";


export async function addData(currentTab, formData) {
  try {
    const response = await fetch(`/api/${currentTab}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      toast.success("Added Successfully");
    } else {
      toast.error("Add method Failed");
    }
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function getData(currentTab) {
  try {
    const response = await fetch(`/api/${currentTab}/get`, {
      method: "GET",
    });

    const result = await response.json();
    
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function updateData(currentTab, formData) {
  try {
    const response = await fetch(`/api/${currentTab}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Updated Successfully");
    } else {
      toast.error("Update Failed");
    }

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteData(currentTab, id){
  try {
    const response = await fetch(`/api/${currentTab}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }), 
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Deleted Successfully");
    } else {
      toast.error("Delete Failed");
    }
  } catch (error) {
    console.error("Error deleting experience:", error);
    toast.error("Delete Failed");
  }
}

export async function login(formData) {
  try {
    const response = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}
