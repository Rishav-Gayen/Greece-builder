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

// Add some basic styles
const styles = `
  /* Form Layout */
  #customer-details-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  /* Form Groups */
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .form-group label {
    font-weight: 500;
    color: #333;
    font-size: 1rem;
    text-align: left;
  }

  .form-group input {
    padding: 0.875rem 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .form-group input:focus {
    outline: none;
    border-color: #00afef;
    box-shadow: 0 0 0 3px rgba(0, 175, 239, 0.1);
  }

  /* Buttons */
  .form-buttons {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }

  .form-buttons button {
    padding: 0.875rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 1rem;
  }

  .submit-btn {
    background: #00afef;
    color: white;
  }

  .submit-btn:hover {
    background: #0095d9;
    transform: translateY(-1px);
  }

  .cancel-btn {
    background: #fff;
    color: #666;
    border: 2px solid #ddd;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(244, 67, 54, 0.2);
  }

  .cancel-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(244, 67, 54, 0.3);
  }
`;

// Inject styles
const styleEl = document.createElement('style');
styleEl.textContent = styles;
document.head.appendChild(styleEl);

// Add SweetAlert2 modal styles
const swalStyles = `
  .swal2-modal {
    border-radius: 16px !important;
    padding: 2rem !important;
    max-width: 500px !important;
  }

  .swal2-title {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1.5rem;
    text-align: left;
  }

  .swal2-content {
    text-align: left;
    margin-bottom: 2rem;
  }
`;

const swalStyleEl = document.createElement('style');
swalStyleEl.textContent = swalStyles;
document.head.appendChild(swalStyleEl);

// Optional: Add this if missing in your file
export const showAlert = (message) => {
  alert(message); // Replace with your preferred alert system
};