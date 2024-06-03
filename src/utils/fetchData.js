// src/utils/fetchData.js
export async function fetchData() {
  try {
    const response = await fetch("/data.json"); // Убедитесь, что путь корректный
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
