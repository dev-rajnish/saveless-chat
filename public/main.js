
  function openWhatsAppChat() {
    // Get the phone number from the input field
    const phoneNumber = document.getElementById('phoneNumber').value.trim();

    // Check if the phone number is exactly 10 digits long
    if (/^\d{10}$/.test(phoneNumber)) {
      // Format the phone number to include the country code (e.g., +91 for India)
      const formattedPhoneNumber = `+91${phoneNumber}`;

      // Construct the WhatsApp chat link
      const whatsappLink = `https://wa.me/${formattedPhoneNumber}`;

      // Open the WhatsApp chat link in a new tab
      window.open(whatsappLink, '_blank');
    } else {
      // Notify the user that the phone number is invalid or incomplete
      alert('Please enter a valid 10-digit phone number Only.');
    }
  }
function toggleTheme(){
  const phoneNumber = document.getElementsByClassName('theme-controller').value.trim();
  console.log("themeChanged");
}