const dateRange = (deliveryMode: string): string => {
   // Get the current date
  const currentDate = new Date();

  // Format the current date
  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Calculate the end date based on the delivery mode
  const endDate = new Date(currentDate);
  if (deliveryMode === "fast") {
    endDate.setDate(currentDate.getDate() + 5); // Add 5 days
  } else if (deliveryMode === "standard") {
    endDate.setDate(currentDate.getDate() + 15); // Add 15 days
  } else {
    throw new Error("Invalid delivery mode. Use 'fast' or 'standard'.");
  }

  // Format and return the date range
  return `${formatDate(currentDate)} - ${formatDate(endDate)}`;
};

export default dateRange;