// ui/feedback.js
export const showDestinationAdded = (tripData) => {
  // 1. First validate ALL required data
  if (!tripData || 
      !tripData.destination || 
      !tripData.tripDetails || 
      !Array.isArray(tripData.tripDetails.activities)) {
    console.error('Invalid trip data structure:', tripData);
    return;
  }

  // 2. Safely get DOM element
  const successEl = document.getElementById('success-message');
  if (!successEl) {
    console.warn('Success message element not found');
    return;
  }

  // 3. Build template with customer details form
  successEl.innerHTML = `
    <div class="success-icon">
      <i class="fas fa-check-circle"></i>
    </div>
    <h3>Customer Details</h3>
    <form id="customer-details-form">
      <div class="form-group">
        <label for="customer-name">Name:</label>
        <input type="text" id="customer-name" name="name" required>
      </div>
      <div class="form-group">
        <label for="customer-email">Email:</label>
        <input type="email" id="customer-email" name="email" required>
      </div>
      <div class="form-group">
        <label for="customer-phone">Phone Number:</label>
        <input type="tel" id="customer-phone" name="phone" required>
      </div>
      <div class="form-buttons">
        <button type="button" class="cancel-btn">Cancel</button>
        <button type="submit" class="submit-btn">Submit Trip</button>
      </div>
    </form>
  `;

  // 4. Safe event listeners
  const form = successEl.querySelector('#customer-details-form');
  const cancelBtn = successEl.querySelector('.cancel-btn');

  // Add validation function
  const validateForm = () => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    // Reset error messages
    form.querySelectorAll('.error-message').forEach(el => el.remove());

    let isValid = true;

    if (!name) {
      isValid = false;
      const nameError = document.createElement('div');
      nameError.className = 'error-message';
      nameError.textContent = 'Please enter your name';
      form.name.parentNode.appendChild(nameError);
    }

    if (!email || !email.includes('@')) {
      isValid = false;
      const emailError = document.createElement('div');
      emailError.className = 'error-message';
      emailError.textContent = 'Please enter a valid email address';
      form.email.parentNode.appendChild(emailError);
    }

    if (!phone) {
      isValid = false;
      const phoneError = document.createElement('div');
      phoneError.className = 'error-message';
      phoneError.textContent = 'Please enter your phone number';
      form.phone.parentNode.appendChild(phoneError);
    }

    return isValid;
  };

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (!validateForm()) {
        return;
      }

      // Get form data
      const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        trip: tripData
      };

      // Log all trip data including customer details
      console.log('Trip Summary:', {
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        },
        destination: tripData.destination.name,
        duration: tripData.tripDetails.duration,
        activities: tripData.tripDetails.activities
      });

      // Close the modal
      successEl.style.display = 'none';

      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Trip Submitted!',
        text: 'Your trip has been successfully submitted. We will contact you shortly.',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'feedback-modal',
          title: 'feedback-title',
          content: 'feedback-content',
          actions: 'feedback-actions',
          confirmButton: 'feedback-confirm'
        }
      });
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      successEl.style.display = 'none';
    });
  }

  successEl.style.display = 'block';
};

// Optional: Add this if missing in your file
export const showAlert = (message) => {
  alert(message); // Replace with your preferred alert system
};